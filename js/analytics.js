/**
 * analytics.js
 * ---------------------------------------------------------------------
 * GA4（Google アナリティクス4）の読み込み・初期化のみを担当します。
 *
 * 測定IDは js/config.js の SITE_CONFIG.analytics.ga4MeasurementId から
 * 読み取ります。測定IDを変更・追加したい場合は config.js だけを
 * 書き換えてください（このファイルの編集は不要です）。
 *
 * 測定IDが空文字（未設定）の場合は何も読み込まず、何も実行しません
 * （本番挙動・パフォーマンスに影響を与えません）。
 *
 * サイト全体の page_view はここで計測します。
 * ONLINE STOREの SHOP NOW ボタンクリック計測（online_store_click）は
 * js/main.js 側で、ここが用意する window.gtag を呼び出す形で実装します。
 * ---------------------------------------------------------------------
 */
(function () {
  "use strict";

  if (typeof SITE_CONFIG === "undefined") return;

  var GA4_ID = SITE_CONFIG.analytics && SITE_CONFIG.analytics.ga4MeasurementId;
  if (!GA4_ID) return; // 未設定の間は計測を一切行わない

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  // main.js（クリック計測）から呼び出せるようグローバルに公開
  window.gtag = gtag;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
  document.head.appendChild(script);

  gtag("js", new Date());
  // config呼び出しのみでサイト全体のページ閲覧（page_view）が計測されます。
  gtag("config", GA4_ID);
})();
