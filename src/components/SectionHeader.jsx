import * as React from "react";
import style from '../styles/SectionHeader.module.css';

const SectionHeader = ({ children }) => {
    return (
        <h2 className={ style.header }>
          { children }
        </h2>
    );
};

export default SectionHeader;
