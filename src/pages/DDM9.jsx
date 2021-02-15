import * as React from "react";
import Helmet from "react-helmet";
import Layout from '../components/Layout.jsx';
import PageTitle from "../components/PageTitle.jsx";
import Emoji from "../components/Emoji.jsx";
import Link from "../components/Link.jsx";
import List from "../components/List.jsx";
import Section from "../components/Section.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const DDM9 = () => {
    return (
        <Layout title="zk-phi の部屋 :: おまけコーナー">
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>

          <PageTitle><Emoji ji="🎉" rotate /> おまけコーナー <Emoji ji="🎉️" rotate /></PageTitle>

          <p>
            ほんもののおまけコーナーです。
          </p>

          <p>
            <Link to="/">&lt; 戻る</Link>
          </p>

          <hr />

          <Section>
            <SectionHeader><Emoji ji="🐱" puni /> おみやげ</SectionHeader>
            <List>
              <li>
                <Link to="/meishi">謎付き基板名刺をゲット</Link>
                <p>
                  趣味用の名刺を電子基板で作ってみました。<br />
                  ちょっとした謎解きが仕込んであるので、解いてくださった方には今度お会いしたとき実物をプレゼントします (在庫切れの場合はゴメンなさいmm)。<br />
                  スイッチなどを取り付けるとマクロパッドとしてちゃんと使えます。
                </p>
              </li>
            </List>
          </Section>

          <hr />

          <p>
            <Link to="/">&lt; 戻る</Link>
          </p>
        </Layout>
    );
}

export default DDM9;
