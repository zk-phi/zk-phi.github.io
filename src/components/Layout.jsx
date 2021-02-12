import * as React from "react";
import style from "../styles/Layout.module.css";
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
    return (
        <main className={ style.content }>
          <Helmet>
            <body className={ style.body } />
          </Helmet>
          { children }
        </main>
    );
};

export default Layout;
