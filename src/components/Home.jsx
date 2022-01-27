import { Link } from "react-router-dom";

import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <p>Hello World of KAKAO FrontEnd!</p>
      <p>
        <Link to="/components">Navigate to Components Page</Link>
      </p>
    </Layout>
  );
};

export default Home;
