https://zk-phi.github.io

おためし GatsbyJS

- 開発用サーバー立ち上げ `npm run develop`

まだ lighthouse 100 点出ていない

# workflows

- PR を作ると lighthouse が走る
- `master` に push するとビルドが走る
- 毎早朝にビルドが走る

ので、 `master` 向けの PR を作っていく感じで開発するといい感じになる。

ビルド時、各種サービスから情報を取ってきて埋め込むため以下の環境変数が必要

- `GH_API_TOKEN` (GitHub の個人用トークン)
- `QIITA_API_TOKEN` (Qiita の個人用トークン)

`npm install` すると `dotenv` が入るので、ローカルで開発する場合は `.env` ファイル (`.gitignore` されている) に書いておくと便利。
