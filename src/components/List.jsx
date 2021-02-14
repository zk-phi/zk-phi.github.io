import * as React from "react";
import style from "../styles/List.module.css";

const List = ({ children }) => {
    return (
        <ul className={ style.list }>{ children }</ul>
    );
};

export default List;
