/**
 * config.js
 * ---------------------------------------------------------------------
 * MONESTA ブランドサイト - 編集用設定ファイル
 *
 * ★ ここを直接編集すれば、HTMLを触らなくても
 *   「数字」「ECモールへのリンク」「連絡先」を差し替えられます。
 *
 * 反映先は main.js が data-config="..." 属性を持つ要素へ自動で
 * テキスト/リンクを流し込みます（index.html 側は編集不要）。
 *
 * 【公開前に必ず確認・差し替えてください】
 *   - stores の各 url（現在は各モールのトップページへの仮リンクです。
 *     MONESTA公式店舗の正式URLに差し替えてください）
 *   - stats.ordersCount（"400,000+" は要確認の数値。根拠となる集計期間・
 *     対象モールを確認のうえ、正式な数字へ更新してください）
 * ---------------------------------------------------------------------
 */

const SITE_CONFIG = {
  // ===== MONESTA IN NUMBERS（実績セクション） =====
  stats: {
    ordersCount: "400,000+",     // ★要確認: 公開前に必ず根拠を確認し、正式な累計受注件数へ差し替え
    ordersLabel: "累計受注件数（各モール合算）",
    storesCount: "4 STORES",
    storesLabel: "主要ECモール展開",
  },

  // ===== ONLINE STORE（ECモールへの導線） =====
  // url は各モールのトップページへの仮リンクです。MONESTA公式店舗の
  // 正式URLが確定次第、ここだけ書き換えてください（HTML編集不要）。
  stores: [
    {
      key: "rakuten",
      name: "楽天市場",
      description: "楽天市場 MONESTA公式店舗",
      url: "https://www.rakuten.co.jp/", // TODO: MONESTA公式店舗の正式URLに差し替え
      accent: "#bf0000",
    },
    {
      key: "yahoo",
      name: "Yahoo!ショッピング",
      description: "Yahoo!ショッピング MONESTA公式店舗",
      url: "https://shopping.yahoo.co.jp/", // TODO: MONESTA公式店舗の正式URLに差し替え
      accent: "#ff0033",
    },
    {
      key: "amazon",
      name: "Amazon",
      description: "Amazon MONESTAブランドストア",
      url: "https://www.amazon.co.jp/", // TODO: MONESTA公式ストアの正式URLに差し替え
      accent: "#111111",
    },
    {
      key: "aupay",
      name: "au PAY マーケット",
      description: "au PAY マーケット MONESTA公式店舗",
      url: "https://wowma.jp/", // TODO: MONESTA公式店舗の正式URLに差し替え
      accent: "#ee6c00",
    },
  ],

  // ===== FOR BUSINESS（法人向けお問い合わせ） =====
  business: {
    // 問い合わせ先（mailto）。正式な問い合わせフォームができたら
    // main.js を触らずここだけ書き換えてください。
    contactUrl: "mailto:aoki@bluetree-inc.com?subject=MONESTA%20取引に関するお問い合わせ",
    contactLabel: "法人のお問い合わせはこちら",
  },

  // ===== COMPANY（運営会社情報） =====
  // 本社所在地（自宅）はMONESTAブランドサイトには掲載しない方針のため、
  // ここには事務所住所のみを記載しています。
  company: {
    name: "株式会社Blue Tree",
    nameEn: "Blue Tree Inc.",
    representative: "代表取締役　青木 聖悦（Masayoshi Aoki）",
    brand: "MONESTA",
    address: "〒545-0023　大阪府大阪市阿倍野区王子町2-17-15",
    tel: "080-4242-2523",
    email: "aoki@bluetree-inc.com",
    siteUrl: "https://monesta.bluetree-inc.com",
  },

  // ===== FOOTER =====
  footer: {
    // コピーライトの年は main.js が現在の年を自動算出して先頭に付与します。
    // ここには保有者名のみを記載してください（例: "Blue Tree Inc."）。
    copyrightHolder: "Blue Tree Inc.",
  },
};
