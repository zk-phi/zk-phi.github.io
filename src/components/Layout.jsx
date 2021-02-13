import * as React from "react";
import style from "../styles/Layout.module.css";
import { Helmet } from 'react-helmet';
import Emoji from '../components/Emoji.jsx';

const Layout = ({ title, children }) => {
    const stalker = React.createRef();
    const handleMousemove = (e) => {
        if (stalker.current) {
            stalker.current.style.opacity = 1;
            stalker.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    };
    React.useEffect(() => {
        document.addEventListener('mousemove', handleMousemove, { passive: true });
        return () => {
            document.removeEventListener('mousemove', handleMousemove);
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
          <div ref={ stalker } className={ style.stalker }><Emoji ji="👀" /></div>
          { children }
        </main>
    );
};

export default Layout;
