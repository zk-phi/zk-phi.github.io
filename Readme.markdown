https://zk-phi.github.io

おためし 11ty

# workflows

- なんらかの branch を push すると lighthouse が走る
- `master` に push するとビルドが走って `gh-pages` に発射される
- 毎早朝にビルドが走る

# develop

`npm install` して `npm run develop` で開発用サーバー立ち上げ

# build

web フォントのサブセット化に必要なツールを

```
pip install fonttools brotli zopfli
```

入れてから `npm run build` で `_site` に生成される

# optimizations

- ビルドの過程で (see `.eleventy.js`)
  - `eleventy-img` で画像の自動 webp 化 & lazy load (see `.eleventy.js`)
  - `htmlmin` でインライン HTML, JS, CSS を minify

- ビルド後に (see `package.json`)
  - `uglifyjs` で js を minify
  - `subfont` で web フォントをサブセット化 & preload (トップページのみ)
  - `svgo` で SVG 画像を minify

- クライアント側で (see `js/app.js`)
  - リンクを `mouseover` (`touchstart`) したときにリンク先を prefetch

# directory

- `.github`
  - `workflows` ... push 時に GitHub Actions で自動実行されるコマンドたち
  - `dependabot.yml` ... パッケージが古いときに PR で教えてくれる君
- `_data` ... ビルド時に実行されて、テンプレートに結果を埋め込めるやつ
  - `lastUpdatedDate.js` ... GitHub からこのリポジトリの最終更新日を取ってくる
  - `monthEmoji.js` ... それぞれの月を表す絵文字
  - `recentActivities.js` ... 最近の僕の活動をいろんなフィードから取ってくる
- `_includes`
  - `css` ... インライン化して使うコアの CSS
  - `js` ... インライン化して使う小さな JS 片たち
  - `layouts` ... いろんなページで共通して使っている DOM 構造
- `fonts` ... WEB フォント / `npm run build` すると `subfont` でサブセット化される
- `img` ... ラスター画像 / `eeleventy-img` で WEBP 化される
- `js` ... defer で読み込む JS
  - `app.js` ... `npm run build` すると `uglifyjs` で minify される
- `pages` ... 各ページのテンプレート
- `svg` ... SVG 画像 / `npm run build` すると `svgo` で minify される
- `.eleventy.js` ... 静的サイトジェネレータの設定
- `lighthouserc.js` ... Lighthouse CI の設定
- `.gitignore`
- `Readme.markdown`
- `favicon.ico`
