import * as React from "react"
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Emoji from "../components/Emoji.jsx";
import style from "../styles/404.module.css";

const NotFoundPage = () => {
    return (
        <main>
          <Helmet>
            <html lang="ja" />
            <title>サーバーが見つかりました</title>
            <meta name="Description" content="サーバーが見つかりました" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <body className={ style.notfound } />
          </Helmet>

          <h2>
            <Emoji ji="i" className={ style.info } /> ページを表示できません
          </h2>

          <p>
            検索中のページは現在、利用できません。
            Web サイトに技術的な問題は発生していないし、
            ブラウザの設定を調整する必要もありません。
          </p>

          <hr />

          <p>次のことを試す必要はありません:</p>

          <ul>
            <li>
              [更新] ボタンをクリックするか、後でやり直してください。
            </li>
            <li>
              アドレス バーにページ アドレスを入力した場合は、
              ページ アドレスを正しく入力したかどうかを確認してください。
            </li>
            <li>
              接続の設定を確認するには、[ツール] メニューの [インターネット オプション]
              をクリックします。[接続] タブで [ダイヤルアップの設定] グループの [設定] ボタン、
              または [LAN の設定] グループの [LAN の設定] ボタンをクリックしてください。
              設定情報は、LAN (ローカル エリアネット ワーク) の管理者か、ISP
              (インターネット サービス プロバイダ) が提供する情報と一致する必要があります。
            </li>
            <li>
              ネットワーク管理者がネットワークの接続の設定を使用可能にしていれば、
              Microsoft Windows を使用して、ネットワークの接続試験を行ったり、
              自動的にネットワークの接続の設定を見つけることができます。
            </li>
            <li>
              Windows でネットワークの接続試験を行ったり、
              ネットワークの接続の設定を見つけたりするには、
              [ネットワークの設定の検出] をクリックしてください。
            </li>
            <li>
              サイトによっては 128 ビットの接続セキュリティを要求するものがあります。
              [ヘルプ] メニューの [バージョン情報] をクリックして、
              インストールした暗号強度を確認してください。
            </li>
            <li>
              セキュリティで保護されたサイトを表示するには、
              セキュリティの設定でそのサポートがされているかどうかを確認してください。
              [ツール] メニューの [インターネット オプション] をクリックします。
              [詳細設定] タブで、[セキュリティ] までスクロールし、[SSL 2.0 を使用する]、
              [SSL 3.0 を使用する]、[TLS 1.0 を使用する]、および [PCT 1.0 を使用する]
              チェック ボックスをオンにしてください。
            </li>
            <li>
              別のリンク先を表示するには、
              <Link to="/">[戻る]</Link> ボタンをクリックしてください。
            </li>
          </ul>

          <p>
            サーバーは見つかりました、DNS エラーではありません。<br />
            zk-phi
          </p>
        </main>
    );
}

export default NotFoundPage
