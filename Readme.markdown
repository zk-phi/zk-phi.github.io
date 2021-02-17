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

入れてから `npm run build` で `_site` に生成される。

`npm run serve` で確認できる。

# optimizations

- ビルドの過程で (see `.eleventy.js`)
  - `eleventy-img` でラスター画像の自動 webp 化 & lazy load
  - `htmlmin` で html (とインライン js, css) を minify
    - タグ間のスペースまで消す設定にして、空白は margin で設定する
    - → フォントが読み込まれた時の CLS が起きない

- ビルド後に (see `package.json`)
  - `uglifyjs-folder` で js を minify
  - `cleancss` で css を minify
  - `svgo` で svg 画像を minify
  - `glyphhanger` で web フォントをサブセット化
    - `subfont` の方が多分無難だけど、読み込み方を自由に試せて遊べそうなのでこちらに

- クライアント側で (see `js/app.js`)
  - リンクを `mouseover` (`touchstart`) したときにリンク先を prefetch

# directory

- `.github`
  - `workflows` ... push 時に GitHub Actions で自動実行されるコマンドたち
  - `dependabot.yml` ... パッケージが古いときに PR で教えてくれる君
- `_data` ... ビルド時に実行されて、テンプレートから結果を使えるやつ
  - `lastUpdatedDate.js` ... GitHub からこのリポジトリの最終更新日を取ってくる
  - `monthEmoji.js` ... それぞれの月を表す絵文字
  - `recentActivities.js` ... 最近の僕の活動をいろんなフィードから取ってくる
- `_includes`
  - `css` ... インライン化して使う基本的な css
  - `js` ... インライン化して使う小さな js 片たち
  - `layouts` ... いろんなページで共通して使っている DOM 構造
- `css` ... 遅延ロードする追加の css / `npm run build` すると `cleancss` で minify される
- `fonts` ... web フォント / `npm run build` すると `glyphhanger` でサブセット化される
- `img` ... ラスター画像 / `eeleventy-img` で webp 化される
- `js` ... 遅延ロードする追加の js / `npm run build` すると `uglifyjs-folder` で minify される
- `pages` ... 各ページのテンプレート
- `svg` ... SVG 画像 / `npm run build` すると `svgo` で minify される
- `.eleventy.js` ... 静的サイトジェネレータの設定
- `lighthouserc.js` ... Lighthouse CI の設定
- `.gitignore`
- `Readme.markdown`
- `favicon.ico`
