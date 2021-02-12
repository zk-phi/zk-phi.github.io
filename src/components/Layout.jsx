import * as React from "react";
import "../styles/style.css";

const Layout = ({ children }) => {
    return (
        <main>
          { children }
        </main>
    );
};

export default Layout;
