import styled from "@emotion/styled";

interface Props {
  text?: boolean;
}

const Progress = ({ text = false }: Props) => {
  return (
    <Wrapper percent={30} className="Progress">
      <div className="bar">
        <span />
      </div>
      {text && (
        <div>
          <span>100%</span>
          <span>닫힌 이슈 0</span>
          <span>열린 이슈 0</span>
        </div>
      )}
    </Wrapper>
  );
};

export default Progress;

const Wrapper = styled.div<{ percent: number }>`
  width: 244px;
  .bar {
    border-radius: 10px;
    overflow: hidden;
    background: var(--inputBackground);
    height: 8px;
    position: relative;
    & > span {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      background: var(--primary-default);
      height: 8px;
      width: ${({ percent }) => percent + "%"};
    }
  }
  & > div:last-of-type {
    margin-top: 8px;
    & > span {
      ${({ theme }) => theme.FontSize.xsmall}
      color: var(--label);
      :not(:nth-of-type(1)) {
        float: right;
        margin-left: 8px;
      }
    }
  }
`;
