import * as React from "react";
import style from "../styles/Layout.module.css";
import { Helmet } from 'react-helmet';
import Emoji from '../components/Emoji.jsx';

const Layout = ({ title, children }) => {
    const [stalkerStyles, setStalkerStyles] = React.useState({});
    const handleMousemove = (e) => {
        setStalkerStyles({
            transition: "opacity 0.3s",
            opacity: 1,
            transform: `translate(${e.clientX}px, ${e.clientY}px)`,
        });
    };
    const handleTouchstart = (e) => {
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
        <main className={ style.content }>
          <Helmet>
            <html lang="ja" />
            <title>{ title }</title>
            <meta name="Description" content="zk-phi のホームページです" />
            <body className={ style.body } />
          </Helmet>
          <div style={ stalkerStyles } className={ style.stalker }>
            <Emoji ji="🦄" />
          </div>
          { children }
        </main>
    );
};

export default Layout;
