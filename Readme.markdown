最新は https://github.com/zk-phi/zk-phi.github.io/tree/master

# メモ

`build.el` で静的ページに最適化がかかる

- 「最終更新日」の埋め込み
- 最低限の CSS のインライン化
- and more ... ?

GitHub Actions で

- PR 作る → `build.el` 走らせたうえで Lighthouse にかける
- `master` に push → `build.el` 走らせたうえで `gh-pages` にデプロイ

しているので、

- コードいじるときは `master` 向けの PR でいじる
- GitHub Pages のデプロイブランチは `gh-pages` に設定

するとなにかといい感じになる。

gh-pages で lighthouse 全項目 100 までチューニングした
