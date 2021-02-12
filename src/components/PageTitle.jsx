import * as React from "react";
import style from '../styles/PageTitle.module.css';

const PageTitle = ({ children }) => {
    return (
        <h1 className={ style.title }>
          { children }
        </h1>
    );
};

export default PageTitle;
