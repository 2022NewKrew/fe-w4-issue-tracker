import React from "react";
import styled from "styled-components";

import { SmileIcon } from "@icons";
import { BigProfileImg, SmallText, Wrapper, XSmallText } from "@atoms";

import { COLOR } from "@constants";
import { calculateTimeDiff } from "@utils";

import { getAuth } from "@/firebase.js";

const CommentWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  flex-direction: row;
`;

const WriterName = styled(SmallText)`
  color: ${COLOR.GREYSCALE.TITLE_ACTIVE};
  margin-right: 10px;
`;

const CommentHeader = styled(Wrapper)`
  background: ${COLOR.GREYSCALE.BACKGROUND};
  border: 1px solid ${COLOR.GREYSCALE.LINE};
  border-radius: 16px 16px 0 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const CommentHeaderLeftPart = styled(Wrapper)`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const CommentHeaderWrightPart = styled(Wrapper)`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const CommentTextWrapper = styled(Wrapper)`
  padding: 20px;
  align-items: flex-start;
  width: 100%;
  border-radius: 0 0 16px 16px;
  background-color: ${COLOR.GREYSCALE.OFF_WHITE};
  border: 1px solid ${COLOR.GREYSCALE.LINE};
`;

const CommentText = styled(SmallText)`
  color: ${COLOR.GREYSCALE.TITLE_ACTIVE};
`;

const CommentMainWrapper = styled(Wrapper)`
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
`;

const IsWriterLabel = styled(XSmallText)`
  padding: 5px 10px;
  border: 1px solid ${COLOR.GREYSCALE.LINE};
  border-radius: 20px;
`;

function IssueComment({ id, photoUrl, name, timestamp, text }) {
  const auth = getAuth();
  return (
    <CommentWrapper>
      {photoUrl && <BigProfileImg src={photoUrl} />}
      <CommentMainWrapper>
        <CommentHeader>
          <CommentHeaderLeftPart>
            <WriterName>{name}</WriterName>
            <SmallText>{calculateTimeDiff(timestamp)} 전</SmallText>
          </CommentHeaderLeftPart>
          <CommentHeaderWrightPart>
            {id === auth.currentUser.uid && (
              <IsWriterLabel>작성자</IsWriterLabel>
            )}
            <SmileIcon
              css={`
                margin-left: 10px;
              `}
            />
          </CommentHeaderWrightPart>
        </CommentHeader>
        <CommentTextWrapper>
          <CommentText>{text}</CommentText>
        </CommentTextWrapper>
      </CommentMainWrapper>
    </CommentWrapper>
  );
}

export default IssueComment;
