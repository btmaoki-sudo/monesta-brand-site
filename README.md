# MONESTA 公式ブランドサイト（公開前・本番仕上げ中）

このリポジトリは、MONESTA公式ブランドサイトのソース一式です。
GitHub Pagesでの公開を前提にした、素のHTML / CSS / JavaScriptのみの静的サイトです。

既存の `monesta-cart` リポジトリとは別プロジェクトです。このリポジトリはMONESTAの
ブランドサイト専用として新規作成しています。

## 第3稿（本番仕上げ）での変更点

- **COMPANY**：会社名・代表者・所在地（事務所）・電話番号・メールアドレスを正式情報へ更新。
- **ONLINE STORE**：4モール目として「au PAY マーケット」を追加（楽天市場・Yahoo!ショッピング・
  Amazon・au PAY マーケット）。ロゴ画像は使わずテキスト＋カラードットのみの表示。
- **ロゴ**：ヘッダー・フッターのテキストロゴを画像ロゴ（`assets/images/logo.png` /
  `logo-white.png`）に差し替え可能な構成へ変更。現状は仮の暫定ロゴ画像。
- **FOR BUSINESS**：「MONESTAがOEM受託業者に見える」表現を解消し、卸売・OEM・ODMの
  提案を歓迎する側であることが伝わる文章に修正。
- **フッター著作権表記**：年表記をJavaScriptで自動算出する方式に変更（毎年の手動更新が不要に）。
- **SEO/OGP**：title・meta description・OGPをブランドコンセプト（あると便利を、もっと身近に。／
  生活雑貨・アウトドア・カー＆バイク・トラベル）に合わせて更新し、Organization構造化データ
  （JSON-LD）を追加。
- **HERO**：object-position をCSS変数化し、本番写真差し替え後のトリミング調整を一箇所で
  行える構成に変更（コピー・スマホの高さは維持）。

## 第2稿での変更点（初版からの主な修正）

- **HERO**: 黒背景のフルスクリーン写真+暗いオーバーレイをやめ、白〜ライトグレーの
  明るい背景に、写真をカード状に大きく見せる構成に変更（清潔感・親しみやすさを優先）。
- **スマホのHERO**: 見出し・説明文・ボタンの余白を広げ、開いた瞬間の情報過多感を軽減。
- **ABOUT**: 「高級感ではなく」の表現を削除し、ブランド価値を下げない文章に調整。
- **PRODUCTS**: 各カテゴリーカードに代表商品タグ（1〜2点・仮名称）を追加。画像に文字を
  重ねるスタイルから、画像→タイトル→タグの構成に変更し、実写真差し替え後も見やすい形に。
- **FOR BUSINESS**: 背景をより明るいチャコールへ変更し、画像をより大きく使用。他セクション
  と地続きに見えるよう調整。
- **配色**: 青色（Blue Treeコーポレートカラー）の使用箇所をヘッダー最上部の細い帯1本のみに
  縮小。アイコンや見出しの青は白・黒・チャコール・ライトグレーに置き換え。
- 上記以外（MONESTA IN NUMBERS / ONLINE STORE / COMPANY / 1ページ構成 / スマホ優先設計 /
  config.jsによる編集構造 / GitHub Pages対応）は初版から維持しています。

## フォルダ構成

```
monesta-brand-site/
├─ index.html          … サイト本体（1ページ完結型）
├─ css/
│  └─ style.css        … 全スタイル（モバイルファースト）
├─ js/
│  ├─ config.js         … ★数字・ECリンク・連絡先など「差し替えたい値」はここ
│  └─ main.js           … メニュー開閉・スムーススクロール・演出などの処理
└─ assets/
   └─ images/           … 仮画像一式（後述）
```

## 今すぐ確認してほしいこと

1. **PC表示**：ブラウザでウィンドウを広げて確認
2. **スマートフォン表示**：ブラウザの検証ツールでiPhone幅（375px前後）にして確認
   - 名刺のQRコードからのアクセスを想定し、スマホ表示を最優先で作っています
3. **各セクション**：ヘッダーの ABOUT / PRODUCTS / ONLINE STORE / FOR BUSINESS / COMPANY
   をタップ・クリックしてスムーススクロールすることを確認
4. **仮画像**：後述の一覧を参照
5. **後から変更すべき項目**：後述の一覧を参照

## 後から差し替える「仮画像」一覧（`assets/images/`）

すべてPillow（Python）で生成したプレースホルダーで、何用の画像かひと目で
分かるようにラベルを入れてあります。実写真に差し替える際は、
**同じファイル名で上書きするだけ**でサイトに反映されます（HTML編集不要）。

| ファイル名 | 用途 | 推奨サイズ（目安） |
|---|---|---|
| `hero.jpg` | ファーストビュー背景（暮らしの中のMONESTA） | 1920×1280以上・横長 |
| `about.jpg` | ABOUTセクションの添え画像 | 1200×1400・縦長 |
| `life.jpg` | PRODUCTSカテゴリー「LIFE」 | 900×1100 |
| `outdoor.jpg` | PRODUCTSカテゴリー「OUTDOOR」 | 900×1100 |
| `car-bike.jpg` | PRODUCTSカテゴリー「CAR & BIKE」 | 900×1100 |
| `travel.jpg` | PRODUCTSカテゴリー「TRAVEL」 | 900×1100 |
| `business.jpg` | FOR BUSINESSセクションの添え画像 | 1200×900 |
| `og-image.jpg` | SNSシェア用OGP画像 | 1200×630固定 |
| `favicon.ico` / `favicon.png` / `apple-touch-icon.png` | ファビコン | 差し替え時は同名で上書き |
| `logo.png` | 正式ロゴ（濃色・明るい背景用）。ヘッダーで使用 | 高さ200px前後・透過PNG推奨 |
| `logo-white.png` | 正式ロゴ（白版・暗い背景用）。フッターで使用 | 高さ200px前後・透過PNG推奨 |

> `logo.png` / `logo-white.png` は現状Pillowで生成した仮の暫定ロゴです。
> 正式ロゴが決まったら、同じファイル名・同程度の縦横比で上書きしてください
> （縦横比が大きく異なる場合は `css/style.css` の `.logo img` / `.footer-logo img` の
> 高さ指定を微調整してください）。

> 画像を増やす／カテゴリーを追加する場合は、`index.html` の
> `<!-- カテゴリーを増減する場合は... -->` コメント付近のブロックを複製してください。

## 後から変更すべき項目（テキスト・数字・リンク）

### 公開前に必ず対応が必要な項目
- **MONESTA IN NUMBERS**：累計受注件数「400,000+」→ 根拠（集計期間・対象モール）を確認のうえ、
  正式な数値を `js/config.js` の `stats.ordersCount` へ
- **ONLINE STORE**：4モールとも現在は各モールのトップページへの仮リンク。MONESTA公式店舗の
  正式URLが決まり次第 `js/config.js` の `stores[].url` を差し替え
- **ロゴ画像**：`assets/images/logo.png` / `logo-white.png` が仮の暫定ロゴ。正式ロゴ画像に差し替え
- **写真素材**：HERO / ABOUT / PRODUCTS 4カテゴリー / FOR BUSINESS / OGPの計8点が仮画像
- **Privacy Policy / Contact フッターリンク**：現在は `#` の仮リンク（`data-placeholder-link`
  属性付き）。公開前にページ or リンク先を用意

### 既に本番情報を反映済みの項目（`js/config.js` で管理）
- **FOR BUSINESS**：問い合わせ用メールリンク（`aoki@bluetree-inc.com` 宛）
- **COMPANY**：会社名・代表者名・所在地（事務所）・電話番号・メールアドレス
- **FOOTER**：コピーライト表記（年は自動算出）

### SEO関連（`index.html` の `<head>` 内・対応済み）
- `<title>`：「MONESTA｜公式サイト」
- `meta description` / OGP / Twitterカード：ブランドコンセプトを反映済み
- `canonical` / `og:url`：`https://monesta.bluetree-inc.com/`
- 構造化データ（Organization / JSON-LD）を追加。COMPANY情報を変更した際はJSON-LD側も合わせて更新
- 残タスク：`og-image.jpg` の本番画像差し替え、faviconの正式ロゴベースへの差し替え

## 技術メモ

- フレームワーク不使用。素のHTML / CSS / JavaScriptのみ。
- 外部サービスへの依存なし（フォントも端末標準フォントを使用）。
- GitHub Pagesにそのまま配置して公開可能な構成です。
- `js/config.js` を分離しているのは、**数字・リンク・連絡先の更新をHTML編集なしで行えるようにするため**です。

## 今回のスコープ外（意図的に未実装）

商品詳細ページ／ブログ／ニュース機能／EC機能／会員登録／決済／複雑な問い合わせフォーム／CMSは、
今回の初版では実装していません。まずは1ページのブランドサイトとして完成度を優先しています。

## 公開について

GitHub Pagesへの公開、および `monesta.bluetree-inc.com` のDNS接続は、
デザイン確認後に別途対応します（今回は未実施）。
