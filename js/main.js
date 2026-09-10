/**
 * main.js — MONESTA ブランドサイト（初版モック）
 * ハンバーガーメニュー / スムーススクロール / スクロールフェード演出 /
 * js/config.js の内容をHTMLへ反映する処理をまとめています。
 * 数字・リンク・連絡先を変えたいときは、このファイルではなく
 * js/config.js を編集してください。
 */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. config.js の内容をHTMLへ反映
     data-config="a.b.c" → SITE_CONFIG.a.b.c のテキストを流し込む
     data-config-href="a.b.c" → 同様にリンク先(href)を差し替える
  --------------------------------------------------------- */
  function getByPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function applyConfig() {
    if (typeof SITE_CONFIG === "undefined") return;

    document.querySelectorAll("[data-config]").forEach((el) => {
      const value = getByPath(SITE_CONFIG, el.getAttribute("data-config"));
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-config-href]").forEach((el) => {
      const value = getByPath(SITE_CONFIG, el.getAttribute("data-config-href"));
      if (value !== undefined) el.setAttribute("href", value);
    });

    renderStoreCards();
    renderFooterCopyright();
  }

  /* ---------------------------------------------------------
     2b. フッターのコピーライトに現在の年を自動挿入
     （config.js には保有者名のみを書けばよく、年の更新作業が不要になる）
  --------------------------------------------------------- */
  function renderFooterCopyright() {
    const el = document.getElementById("footer-copyright");
    if (!el || typeof SITE_CONFIG === "undefined") return;
    const year = new Date().getFullYear();
    const holder = SITE_CONFIG.footer && SITE_CONFIG.footer.copyrightHolder;
    el.textContent = holder ? `© ${year} ${holder}` : `© ${year}`;
  }

  /* ---------------------------------------------------------
     2. ONLINE STORE カードを config.stores から自動生成
     公式ロゴは使わず、モールごとの汎用アイコン（MONESTA IN NUMBERS
     セクションの store-chip-icon と同じSVG）＋ store.key に対応する
     store-card--<key> 修飾クラス（css/style.css側でアクセントカラー・
     カード背景・アイコン配色を管理）で4モールを区別する。
  --------------------------------------------------------- */
  const STORE_ICONS = {
    rakuten:
      '<svg viewBox="0 0 48 48" fill="none"><path d="M6 8h5l4.2 22.6a3 3 0 0 0 3 2.4h15a3 3 0 0 0 3-2.4L39 16H13" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="39" r="2.6" fill="currentColor"/><circle cx="33" cy="39" r="2.6" fill="currentColor"/></svg>',
    yahoo:
      '<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="18" width="32" height="9" rx="1.5" stroke="currentColor" stroke-width="2.4"/><rect x="10" y="27" width="28" height="14" rx="1.5" stroke="currentColor" stroke-width="2.4"/><path d="M24 18v23M24 18c-3-6-13-6-13 0M24 18c3-6 13-6 13 0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    amazon:
      '<svg viewBox="0 0 48 48" fill="none"><path d="M24 6 42 15v18L24 42 6 33V15L24 6Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M6 15l18 9 18-9M24 24v18" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></svg>',
    aupay:
      '<svg viewBox="0 0 48 48" fill="none"><rect x="14" y="5" width="20" height="38" rx="3.5" stroke="currentColor" stroke-width="2.4"/><path d="M21 38h6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  };

  function renderStoreCards() {
    const grid = document.getElementById("store-grid");
    if (!grid || typeof SITE_CONFIG === "undefined") return;

    grid.innerHTML = "";
    SITE_CONFIG.stores.forEach((store) => {
      const card = document.createElement("a");
      card.className = "store-card store-card--" + store.key;
      card.href = store.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("aria-label", store.name + "の公式ストアへ（別タブで開きます）");

      const icon = STORE_ICONS[store.key] || "";
      card.innerHTML = `
        <div class="store-card-main">
          <span class="store-icon" aria-hidden="true">${icon}</span>
          <span class="store-card-text">
            <span class="store-card-name">${store.name}</span>
            <span class="store-card-desc">${store.description}</span>
          </span>
        </div>
        <span class="btn btn-primary">SHOP NOW <span class="store-card-arrow" aria-hidden="true">→</span></span>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------
     3. ハンバーガーメニュー（モバイル）
  --------------------------------------------------------- */
  function initNav() {
    const btn = document.getElementById("hamburger-btn");
    const nav = document.getElementById("main-nav");
    const overlay = document.getElementById("nav-overlay");
    if (!btn || !nav || !overlay) return;

    function openNav() {
      nav.classList.add("is-open");
      overlay.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "メニューを閉じる");
      document.body.style.overflow = "hidden";
    }
    function closeNav() {
      nav.classList.remove("is-open");
      overlay.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "メニューを開く");
      document.body.style.overflow = "";
    }
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      isOpen ? closeNav() : openNav();
    });
    overlay.addEventListener("click", closeNav);
    nav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------------------------------------------------------
     4. ヘッダー分のオフセットを考慮したスムーススクロール
     （CSSのscroll-behavior:smoothに加え、固定ヘッダー分の
     スクロール位置調整をJSで行う）
  --------------------------------------------------------- */
  function initSmoothScroll() {
    const header = document.getElementById("site-header");
    const headerH = header ? header.offsetHeight : 60;

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerH + 1;
        window.scrollTo({ top, behavior: "smooth" });
        history.pushState(null, "", id);
      });
    });
  }

  /* ---------------------------------------------------------
     5. スクロール時のフェードイン演出（控えめ）
  --------------------------------------------------------- */
  function initFadeIn() {
    const targets = document.querySelectorAll(".fade-in");
    if (targets.length === 0) return;

    // prefers-reduced-motion のユーザーには演出をスキップ（常に表示）
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduceMotion) {
      // 観測できない/演出不要な環境では、そのまま普通に表示する
      // (CSSの初期状態は「表示」なので何もしなくてよい)
      return;
    }

    // ここでIntersectionObserverが使えると分かったので、初めて「隠す」クラスを付ける
    targets.forEach((el) => el.classList.add("fade-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.remove("fade-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------
     init
  --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    initNav();
    initSmoothScroll();
    initFadeIn();
  });
})();
