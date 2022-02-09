import styled, { css } from "styled-components";
import { cssFontSize } from "./Text";

export const ProgressIndicatorBar = styled.div(({ openIssueLength, closeIssueLength }) => {
  const percentage = openIssueLength + closeIssueLength > 0 ? (closeIssueLength * 100) / (openIssueLength + closeIssueLength) : 0;

  return css`
    width: 244px;
    height: 8px;
    border-radius: 10px;
    background: linear-gradient(90deg, #007aff 0%, #007aff ${percentage}%, #eff0f6 ${percentage}%, #eff0f6 100%);
  `;
});

export const ProgressIndicator = ({ openIssueLength, closeIssueLength, ...props }) => {
  const percentage = openIssueLength + closeIssueLength > 0 ? (closeIssueLength * 100) / (openIssueLength + closeIssueLength) : 0;

  return (
    <div {...props}>
      <ProgressIndicatorBar openIssueLength={openIssueLength} closeIssueLength={closeIssueLength} />
      <TextWrapper>
        <span>{`${percentage.toFixed(0)}%`}</span>
        <StyledSpan>{`열린 이슈 ${openIssueLength}`}</StyledSpan>
        <span>{`닫힌 이슈 ${closeIssueLength}`}</span>
      </TextWrapper>
    </div>
  );
};

const TextWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;

  ${cssFontSize["xsmall"]}
  color: ${({ theme }) => theme.grayscale.label};
`;

const StyledSpan = styled.span`
  margin: 0 8px 0 auto;
`;
