import * as React from "react";
import style from "../styles/Section.module.css";

const Section = ({ children }) => {
    return (
        <section className={ style.section }>
          { children }
        </section>
    );
};

export default Section;
