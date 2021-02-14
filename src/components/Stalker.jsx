import * as React from "react";
import style from "../styles/Stalker.module.css";
import Emoji from '../components/Emoji.jsx';

const Stalker = () => {
    const stalker = React.useRef();
    const handleMove = (x, y) => {
        if (stalker.current) {
            stalker.current.style.transition = "opacity 0.3s";
            stalker.current.style.opacity = 1;
            stalker.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    };
    const handleEnd = (e) => {
        stalker.current.style.opacity = 0;
    };
    const handleMousemove = (e) => handleMove(e.clientX, e.clientY);
    const handleTouchmove = (e) => handleMove(e.touches[0].clientX + 8, e.touches[0].clientY + 8);
    React.useEffect(() => {
        document.addEventListener('mousemove', handleMousemove, { passive: true });
        document.addEventListener('touchmove', handleTouchmove, { passive: true });
        document.addEventListener('mouseout', handleEnd, { passive: true });
        return () => {
            document.removeEventListener('mousemove', handleMousemove);
            document.removeEventListener('touchmove', handleTouchmove);
            document.removeEventListener('mouseout', handleEnd);
        }
    }, []);
    return (
        <div ref={ stalker } className={ style.stalker }>
          <Emoji ji="🦄" />
        </div>
    );
};

export default Stalker;
