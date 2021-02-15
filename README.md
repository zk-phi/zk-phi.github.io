https://zk-phi.github.io

おためし GatsbyJS

- 開発用サーバー立ち上げ `npm install` して `npm run develop`

まだ lighthouse 100 点出ていない

# workflows

- なんらかの branch を push すると lighthouse が走る
- `master` に push するとビルドが走る
- 毎早朝にビルドが走る

ビルド時、各種サービスから情報を取ってきて埋め込むため以下の環境変数が必要

- `GITHUB_API_TOKEN` (GitHub の個人用トークン)
- `QIITA_API_TOKEN` (Qiita の個人用トークン)

`dotenv` が入っているので、ローカルで開発する場合は `.env` ファイルに書いておくと便利。

GitHub Actions で使うトークンは GitHub Secrets に登録しておけば ok (名前が `GH_API_TOKEN` になっていることに注意)
