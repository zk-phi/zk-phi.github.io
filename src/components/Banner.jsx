import * as React from "react";
import Link from "./Link.jsx";
import style from "../styles/Banner.module.css";

const Banner = ({ to, href, src, alt, height, width }) => {
    return (
        <Link className={ style.banner } href={ href } to={ to }>
          <img src={ src } alt={ alt } height={ height } width={ width } />
        </Link>
    );
};

export default Banner;
