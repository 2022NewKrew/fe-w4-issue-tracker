import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../atoms/Button";

export const TestNew = () => {
  return (
    <Div>
      <Link to="/issue">
        <Button options={{ type: "Medium-Standard" }}>/issue 라우팅</Button>
      </Link>
      <Link to="/test">
        <Button options={{ type: "Medium-Standard" }}>/test 라우팅</Button>
      </Link>
    </Div>
  );
};

const Div = styled.div`
  border: 1px solid black;
  background-clip: content-box;
  flex-wrap: wrap;
  display: flex;
  padding: 10px;
  margin: 10px;

  & > * {
    margin: 10px;
  }
`;
