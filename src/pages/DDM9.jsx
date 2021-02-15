import * as React from "react";
import Helmet from "react-helmet";
import style from "../styles/DDM9.module.css";
import imgF from "../images/ddm9_f.png";
import imgB from "../images/ddm9_b.png";
import Layout from "../components/Layout.jsx";

const style1 = {
    transform: "scale(1, 1)",
    transition: "transform 0.5s ease-out 0.5s",
};

const style2 = {
    transform: "scale(0, 1)",
    transition: "transform 0.5s ease-in 0s",
};

const DDM9 = () => {
    const [reversed, setReversed] = React.useState(false);

    return (
        <Layout title="zk-phi の部屋 :: おまけコーナー">
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>

          <div className={ style.wrapper } style={ reversed ? style2 : style1 }>
            <div className={ style.spacer } />
            <button className={ style.btn } onClick={ () => setReversed(true) }>
              <img alt="meishi" className={ style.img } src={ imgF } />
            </button>
          </div>

          <div className={ style.wrapper } style={ reversed ? style1 : style2 }>
            <div className={ style.spacer } />
            <button className={ style.btn } onClick={ () => setReversed(false) }>
              <img alt="meishi-backside" className={ style.img } src={ imgB } />
            </button>
          </div>
        </Layout>
    );
};

export default DDM9;
