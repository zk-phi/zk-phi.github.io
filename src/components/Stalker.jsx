import * as React from "react";
import style from "../styles/Stalker.module.css";
import Emoji from '../components/Emoji.jsx';

const Stalker = () => {
    const stalker = React.useRef();
    const handleMousemove = (e) => {
        if (stalker.current) {
            stalker.current.style.transition = "opacity 0.3s";
            stalker.current.style.opacity = 1;
            stalker.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    };
    const handleMouseout = (e) => {
        if (stalker.current) {
            stalker.current.style.opacity = 0;
        }
    };
    React.useEffect(() => {
        if (!window.ontouchstart) {
            document.addEventListener('mousemove', handleMousemove, { passive: true });
            document.addEventListener('mouseout', handleMouseout, { passive: true });
            return () => {
                document.removeEventListener('mousemove', handleMousemove);
                document.removeEventListener('mouseout', handleMouseout);
            }
        }
    });
    return (
        <div ref={ stalker } className={ style.stalker }>
          <Emoji ji="🦄" />
        </div>
    );
};

export default Stalker;
