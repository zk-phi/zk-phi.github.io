import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import style from "../styles/Link.module.css";

const Link = ({ href, to, children }) => {
    if (href) {
        return (
            <a target="_blank" rel="noreferrer" href={ href } className={ style.link }>
              { children }
            </a>
        );
    } else {
        return (
            <GatsbyLink to={ to } className={ style.link }>
              { children }
            </GatsbyLink>
        )
    }
}

export default Link;
