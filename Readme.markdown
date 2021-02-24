https://zk-phi.github.io

おためし 11ty

直す気のないところ以外は lighthouse 満点までチューニングしてみた
- 画像の解像度が低すぎ → 元からこのサイズなので
- 小さすぎるリンクがある → 元から押されることを意図していないリンクが一つあるので

# workflows

- なんらかの branch を push すると lighthouse が走る
- `master` に push するとビルドが走って `gh-pages` に発射される
- 毎早朝にビルドが走る

# 環境構築

`npm install && npx patch-package`

本当は `postinstall` で `patch-package` を走らせたいけど、なぜか GitHub Actions 上で `npm ci` にコケるので手で実行します。

当てるパッチはこれ https://github.com/filamentgroup/glyphhanger/pull/85 なのでマージされたら不要です。

## develop

`npm run develop` で開発用サーバー立ち上げ

## build

`npm run build` で静的ページが `_site` に生成される (`npm run serve` で確認できる)。

web フォントのサブセット化に必要なツール

```
pip install fonttools brotli zopfli
```

を入れてから `npm run opt` すると、生成された静的ページがもろもろ最適化される。

# optimizations

試してみたこと。

## テンプレートレベル

(see `_includes/layout/minimal.njk`)

- index.njk のクリティカルな css をすべてインラインに展開
  - それ以外のページはキャッシュに期待して普通に配置

- index.njk のフォントを preload
   - css 側で `font-display: swap` な fontface を定義
   <!-- - 呼び出し (`font-family: ...`) をクラスで囲んでおいて、 js で遅れてトリガー -->
   <!--   - 初回レンダーをブロックしないのを狙っている、数字見るといちおう意味ありそう -->
   <!-- - Font Loading API を使った方が丁寧っぽい https://dev.opera.com/articles/better-font-face/ -->
   <!-- - initial rendering vs FOUT 時間はトレードオフっぽい？ -->
   <!--   - 前者を取ってあえて preload しないでみた (多分いけてない) -->

- 追加の css, js をすべて遅延ロード
   - 各種インタラクションなど、初回のレンダリングに必要のないもの
   - js, css は `requestIdleCallback` でアイドルを待ってからロード (see `js/loader.js`)
     - `loader.js` 自体は `defer` で遅延ロード

## ビルド時

(see `.eleventy.js`)

- `eleventy-img` でラスター画像の自動 webp 化 & lazy load

## ビルド後

(see `package.json`)

- `glyphhanger` で web フォントをサブセット化
   - `index.html` 用とそれ以外用で別々にサブセット化
   - `@fontface` の CSS をインライン化してあるので、 `index.html` だけ外から URL を書き換える
     - ※ html の minify 前に走らせないと、書き換え箇所が複数ある時うまくいかないっぽい

- `htmlmin` で html (とインライン js, css) を minify
   - タグ間のスペースまで消す設定にして、空白は margin でつける
   - → フォントが後から読み込まれた時の CLS が小さい
   - (※ この影響で opt 前後で空白の大きさが若干変わることがある)

- `uglifyjs-folder` で js を minify

- `cleancss` で css を minify

- `svgo` で svg 画像を minify

## クライアント側

(see `js/prefetch.js`)

- サイト内リンクをほぼすべてアイドル中に `prefetch`
  - `mousedown` (`touchstart`) で `prerender`
  - 「最近の活動」ページだけリンクがすごく多いので自重

- 全ページ共通で使用している CSS などもアイドル中に `prefetch`
  - index.njk だけ初回レンダー最優先でインライン化しているので

# directories

- `_data`
  - `lastUpdatedDate.js` ... GitHub からこのリポジトリの最終更新日を取ってくる
  - `monthEmoji.js` ... それぞれの月を表す絵文字
  - `recentActivities.js` ... 最近の僕の活動をいろんなフィードから取ってくる
- `_layouts` ... いろんなページで共通して使っている DOM 構造
- `css` ... css
- `fonts` ... web フォント
- `img` ... ラスター画像
- `js` ... js
- `pages` ... 各ページ (のテンプレート)
- `svg` ... SVG
- `patches` ... node のパッケージに当てるパッチ (本家 merge 待ち)
