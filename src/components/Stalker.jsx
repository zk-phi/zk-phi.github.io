import * as React from "react";
import style from "../styles/Stalker.module.css";
import Emoji from '../components/Emoji.jsx';

const Stalker = () => {
    const stalker = React.useRef();
    const [isTouch, setIsTouch] = React.useState(false);
    const handleMousemove = (e) => {
        if (!isTouch && stalker.current) {
            stalker.current.style.transition = "opacity 0.3s";
            stalker.current.style.opacity = 1;
            stalker.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    };
    const handleTouchstart = (e) => {
        setIsTouch(true);
        e.preventDefault();
    };
    React.useEffect(() => {
        document.addEventListener('mousemove', handleMousemove, { passive: true });
        document.addEventListener('touchstart', handleTouchstart, { passive: true });
        return () => {
            document.removeEventListener('mousemove', handleMousemove);
            document.removeEventListener('touchstart', handleTouchstart);
        }
    }, []);
    return (
        <div ref={ stalker } className={ style.stalker }>
          <Emoji ji="🦄" />
        </div>
    );
};

export default Stalker;
