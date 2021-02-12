import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/Layout.jsx';

const Index = () => {
    return (
        <Layout>
          <title>GatsbyJS すごい</title>
          <h1>GatsbyJS すごい</h1>
          <ul>
            <li>
              <Link to="/activities">最近の活動</Link>
            </li>
          </ul>
        </Layout>
    );
};

export default Index;
