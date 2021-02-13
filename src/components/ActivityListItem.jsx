import * as React from "react";
import style from "../styles/ActivityListItem.module.css";
import Link from "./Link.jsx";

const ActivityListItem = ({ item: { source, category, title, link } }) => {
    return (
        <li key={ link }>
          <div>
            <span className={ style.tag }>{ category }</span>
            <span className={ style.source }>{ source }</span>
          </div>
          <div>
            <Link href={ link }>{ title }</Link>
          </div>
        </li>
    );
};

export default ActivityListItem;
