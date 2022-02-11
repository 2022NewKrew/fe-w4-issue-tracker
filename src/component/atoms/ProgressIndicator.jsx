import styled, { css } from "styled-components";
import { cssFontSize } from "./Text";

const milestoneInfo = (milestone) => {
  if (milestone.issues === undefined) {
    return {
      openIssueLength: 0,
      closeIssueLength: 0,
      percentage: 0,
    };
  }

  const openIssueLength = milestone.issues.filter(({ status }) => status === "open").length;
  const closeIssueLength = milestone.issues.length - openIssueLength;
  const percentage = openIssueLength + closeIssueLength > 0 ? (closeIssueLength * 100) / (openIssueLength + closeIssueLength) : 0;

  return { openIssueLength, closeIssueLength, percentage };
};

export const ProgressIndicatorBar = styled.div(({ milestone, percentage }) => {
  if (percentage === undefined) {
    const { percentage: generated } = milestoneInfo(milestone);
    percentage = generated;
  }

  return css`
    width: 244px;
    height: 8px;
    border-radius: 10px;
    background: linear-gradient(90deg, #007aff 0%, #007aff ${percentage}%, #eff0f6 ${percentage}%, #eff0f6 100%);
  `;
});

export const ProgressIndicator = ({ milestone, ...props }) => {
  const { openIssueLength, closeIssueLength, percentage } = milestoneInfo(milestone);

  return (
    <div {...props}>
      <ProgressIndicatorBar percentage={percentage} />
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
