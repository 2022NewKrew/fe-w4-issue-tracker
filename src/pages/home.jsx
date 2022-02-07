import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Hello World of KAKAO FrontEnd!</p>
      <p>
        <Link to="/components-page">Navigate to Components Page</Link>
      </p>
      <p>
        <Link to="/issue-list">Navigate to Issue List</Link>
      </p>
      <p>
        <Link to="/new-issue">Navigate to New Issue</Link>
      </p>
      <p>
        <Link to="/issue-details">Navigate to Issue Details</Link>
      </p>
      <p>
        <Link to="/label-list">Navigate to Label List</Link>
      </p>
      <p>
        <Link to="/milestone-list">Navigate to Milestone List</Link>
      </p>
    </div>
  );
};

export default Home;
