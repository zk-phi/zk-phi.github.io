import * as React from "react";
import style from "../styles/Emoji.module.css";

const Emoji = ({ ji, rotate = false, puni = false, className = "" }) => {
    const name = (
        `${style.emoji} ${className}`
        + (rotate ? ` ${style.rotate}` : "")
        + (puni ? ` ${style.puni}` : "")
    );
    return (
        <span className={ name } role="img" aria-label="icon">
          { ji }
        </span>
    );
}

export default Emoji;
