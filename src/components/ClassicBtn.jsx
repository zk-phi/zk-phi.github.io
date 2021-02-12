import * as React from "react";
import style from "../styles/ClassicBtn.module.css";

const ClassicBtn = ({ onClick, children, disabled = false }) => {
    return (
        <button className={ style.btn } onClick={ onClick } disabled={ disabled }>
          { children }
        </button>
    );
}

export default ClassicBtn;
