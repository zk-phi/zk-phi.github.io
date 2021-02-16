https://zk-phi.github.io

おためし GatsbyJS

- 開発用サーバー立ち上げ `npm install` して `npm run develop`

# workflows

- なんらかの branch を push すると lighthouse が走る
- `master` に push するとビルドが走る
- 毎早朝にビルドが走る

ビルド時、各種サービスから情報を取ってきて埋め込むため以下の環境変数が必要

- `GITHUB_API_TOKEN` (GitHub の個人用トークン)
- `QIITA_API_TOKEN` (Qiita の個人用トークン)

`dotenv` が入っているので、ローカルで開発する場合は `.env` ファイルに書いておくと便利。

GitHub Actions で使うトークンは GitHub Secrets に登録しておけば ok (名前が `GH_API_TOKEN` になっていることに注意)

# optimization

GatsbyJS 標準の最適化以外に:

- `npm run imagemin` すると画像が minify される
  - `src/images` を直接書き換えるので注意
  - Github Actions でビルド直前に叩くようにしているので、ローカルでは基本使わない
  - (※極小の同盟バナーを置きたいだけなので `gatsby-image` はオーバーキルと判断)

- `npm run build` の過程で `subfont` を実行して、 `index.jsx` 専用のサブセットフォントを用意
  - それ以外のページに遷移するとフルのフォントが読み込まれる
  - フォールバックのための CSS が入るので、 lighthouse の `unused-css-rules` は 1 以上になる
