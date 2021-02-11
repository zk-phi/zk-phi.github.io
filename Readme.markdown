https://zk-phi.github.io

# メモ

`build.el` で静的ページに最適化がかかる

- 「最終更新日」の埋め込み
- 最低限の CSS のインライン化 (TODO)
- and more ... ?

GitHub Actions で

- PR 作る → `build.el` 走らせたうえで Lighthouse にかける
- `master` に push → `build.el` 走らせたうえで `gh-pages` にデプロイ

しているので、

- コードいじるときは `master` 向けの PR でいじる
- GitHub Pages のデプロイブランチは `gh-pages` に設定

すると何かといい感じになる。
