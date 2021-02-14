import * as React from "react";
import Layout from '../components/Layout.jsx';
import style from "../styles/code39.module.css";
import image from "../images/code39.svg";
import PageTitle from "../components/PageTitle.jsx";
import Emoji from "../components/Emoji.jsx";

const Code39 = () => {
    return (
        <Layout title="zk-phi の部屋">
          <PageTitle><Emoji ji="🖐" rotate /> おまけコーナー <Emoji ji="🖐" rotate /></PageTitle>
          <div className={ style.scrollContainer }>
            <div className={ style.gradient }>
              <div className={ style.gradient_end }>CODE39</div>
            </div>
            <img alt="code39" src={ image } className={ style.code39 } />
          </div>
        </Layout>
    );
}

export default Code39;
