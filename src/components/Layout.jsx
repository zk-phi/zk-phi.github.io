import * as React from "react";
import style from "../styles/Layout.module.css";
import { Helmet } from 'react-helmet';
import Stalker from '../components/Stalker.jsx';

const Layout = ({ title, children }) => {
    return (
        <main className={ style.content }>
          <Helmet>
            <html lang="ja" />
            <title>{ title }</title>
            <meta name="Description" content="zk-phi のホームページです" />
            <body className={ style.body } />
          </Helmet>
          <Stalker />
          { children }
        </main>
    );
};

export default Layout;