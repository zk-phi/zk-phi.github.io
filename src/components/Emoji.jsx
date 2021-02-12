import * as React from "react";

const Emoji = ({ ji, className = "" }) => {
    return (
        <span className={ className } role="img" aria-label="icon">
          { ji }
        </span>
    );
}

export default Emoji;
