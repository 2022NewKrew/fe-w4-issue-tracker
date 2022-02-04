import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Hello World of KAKAO FrontEnd!</p>
      <p>
        <Link to="/components">Navigate to Components Page</Link>
      </p>
    </div>
  );
};

export default Home;
