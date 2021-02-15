import * as React from "react";
import Helmet from "react-helmet";
import Layout from '../components/Layout.jsx';
import style from "../styles/code39.module.css";
import image from "../images/code39.svg";
import PageTitle from "../components/PageTitle.jsx";
import Emoji from "../components/Emoji.jsx";
import Link from "../components/Link.jsx";

const Code39 = () => {
    return (
        <Layout title="zk-phi の部屋 :: おまけコーナー">
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>

          <PageTitle><Emoji ji="👋" rotate /> おまけコーナー <Emoji ji="👋️" rotate /></PageTitle>

          <p>
            おまけコーナーへようこそ！ここにはなにもありません？？？
          </p>

          <p>
            <Link to="/">&lt; 戻る</Link>
          </p>

          <hr />

          ↓

          <div className={ style.scrollContainer }>
            <div className={ style.gradient }>
              <div className={ style.gradient_end }>X0503</div>
            </div>
            <img alt="code39" src={ image } className={ style.code39 } />
            <div className={ style.foot } />
          </div>
        </Layout>
    );
}

export default Code39;
