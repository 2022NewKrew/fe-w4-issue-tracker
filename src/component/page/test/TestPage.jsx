import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icons";
import { Input } from "../../atoms/Input";
import { LargeLabel, LineLabel, SmallLabel } from "../../atoms/Label";
import { CommentHeader, CommentText, CommentWrapper, Username } from "../../molecules/Comment";
import { FilterBar } from "../../molecules/FilterBar";
import { Taps } from "../../molecules/Taps";

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

export const TestPage = () => {
  const inputRef = useRef();
  const [isFocus, setFocus] = useState(false);
  const className = isFocus ? "focus" : "";

  return (
    <>
      <Div>
        <Button options={{ type: "Large" }} disabled>
          BUTTON
        </Button>
        <Button options={{ type: "Medium-Standard", prefixIcon: "plus" }}>BUTTON</Button>
        <Button options={{ type: "Small-Standard", prefixIcon: "plus" }}>BUTTON</Button>
        <Button options={{ type: "Small-Secondary", prefixIcon: "plus" }}>BUTTON</Button>
        <Button options={{ type: "Medium-Standard", color: "secondary", prefixIcon: "plus" }}>BUTTON</Button>
        <Button options={{ type: "Medium-Text", prefixIcon: "trash" }}>BUTTON</Button>
        <Button options={{ type: "Small-Text", prefixIcon: "trash" }}>BUTTON</Button>
        <Input options={{ size: "large" }} placeholder="아이디" />
        <Taps labelCount={0} milestoneCount={0} />
        <FilterBar wrapperProps={{ className, onClick: () => inputRef.current.focus() }} inputProps={{ onFocus: () => setFocus(true), onBlur: () => setFocus(false), ref: inputRef }} />
        <LargeLabel isOpen={true} />
        <LargeLabel isOpen={false} /* 생략 가능 */ />
        <SmallLabel name="documentation" backgroundColor="blue" isBright={true} />
        <SmallLabel name="bug" backgroundColor="#FFD1CF" isBright={false} />
        <LineLabel name="작성자" />
        <CommentWrapper state="open">
          <CommentHeader>
            <Username>Remian103</Username>
          </CommentHeader>
          <CommentText>코멘트 테스트</CommentText>
        </CommentWrapper>
        <Icon
          css={`
            color: green;
            stroke: white;
          `}
          name="check-box-active"
        />
        <Link to="new">
          <Button options={{ type: "Medium-Standard" }}>라우팅 테스트</Button>
        </Link>
      </Div>

      <Outlet />
    </>
  );
};
