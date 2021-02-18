https://zk-phi.github.io

おためし 11ty

直す気のないところ以外は lighthouse 満点までチューニングしてみた
- 画像の解像度が低すぎ → 元からこのサイズなので
- 小さすぎるリンクがある → 元から押されることを意図していないリンクが一つあるので

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

- テンプレートレベル (see `_includes/layout/minimal.njk`)
  - クリティカルな css をすべてインラインに展開
  - 追加の css, js, font はすべて遅延ロード
    - js, css は `requestIdleCallback` でアイドルを待ってからロード (see `js/loader.js`)
      - `loader.js` 自体は `defer` で遅延ロード
    - font は
      - css 側で `font-display: swap` な fontface を定義
        - 呼び出し (`font-family: ...`) をクラスで囲んでおいて、 js で遅れてトリガー
        - Font Loading API を使った方が丁寧っぽい https://dev.opera.com/articles/better-font-face/
      - initial rendering の vs FOUT 時間はトレードオフっぽい？
        - 前者を取ってあえて preload しないでみた (多分いけてない)

- ビルド時 (see `.eleventy.js`)
  - `eleventy-img` でラスター画像の自動 webp 化 & lazy load
  - `htmlmin` で html (とインライン js, css) を minify
    - タグ間のスペースまで消す設定にして、空白は margin でつける
    - → フォントが後から読み込まれた時の CLS が小さい

- ビルド後 (see `package.json`)
  - `uglifyjs-folder` で js を minify
  - `cleancss` で css を minify
  - `svgo` で svg 画像を minify
  - `glyphhanger` で web フォントをサブセット化, `index.html` 内の url を置き換え
    - サブセット化するのは `index.html` 用だけ
    - `subfont` の方が多分無難だけど、読み込み方を自由に試せて遊べそうなのでこちらに

- クライアント側 (see `js/prefetch.js`)
  - サイト内リンクをすべて `prefetch`
  - `mouseover` (`touchstart`) で `prerender`

# directories

- `_data`
  - `lastUpdatedDate.js` ... GitHub からこのリポジトリの最終更新日を取ってくる
  - `monthEmoji.js` ... それぞれの月を表す絵文字
  - `recentActivities.js` ... 最近の僕の活動をいろんなフィードから取ってくる
- `_includes`
  - `css` ... インライン化して使う基本的な css たち
  - `layouts` ... いろんなページで共通して使っている DOM 構造
- `css` ... 遅延ロードする css
- `fonts` ... web フォント
- `img` ... ラスター画像
- `js` ... 遅延ロードする js
- `pages` ... 各ページのテンプレート
- `svg` ... SVG 画像
