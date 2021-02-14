import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import style from "../styles/Link.module.css";

const Link = ({ className, href, to, children }) => {
    const name = `${className} ${style.link}`;
    if (href) {
        return (
            <a target="_blank" rel="noreferrer" href={ href } className={ name }>
              { children }
            </a>
        );
    } else {
        return (
            <GatsbyLink to={ to } className={ name }>
              { children }
            </GatsbyLink>
        )
    }
}

export default Link;
