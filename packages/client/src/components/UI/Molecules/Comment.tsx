import styled from "@emotion/styled";
import Icon from "@Icon";
import Atoms from "@UI/Atoms";

interface Props extends SProps {
  text: string;
}

const Comment = ({ width, text, state = "initial" }: Props) => {
  return (
    <Wrapper width={width} state={state}>
      <div className="header">
        UserName
        <span>TimeStamp</span>
        <Icon name="smile" />
        {state === "initial" && [
          <Atoms.Label type="athor" />,
          <Atoms.Button shape="text" size="small" icon="edit">
            편집
          </Atoms.Button>,
        ]}
      </div>
      {text}
    </Wrapper>
  );
};

export default Comment;

interface SProps {
  width: number;
  state?: "initial" | "close" | "reopen";
}

const Wrapper = styled.article<SProps>`
  ${({ state = "initial" }) => stateList[state]}
  width: ${({ width }) => width + "px"};
  border-radius: 16px;
  overflow: hidden;
  min-height: 124px;
  padding: 80px 24px 16px;
  position: relative;
  .header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    ${({ theme }) => theme.FontSize.small};
    height: 64px;
    padding: 18px 24px;
    & > span {
      margin-left: 8px;
      color: var(--label);
    }
    & > svg {
      top: 24px;
      right: 24px;
    }
    & > label {
      position: absolute;
      top: 18px;
      right: 127px;
    }
    & > button {
      position: absolute;
      top: 12px;
      right: 60px;
    }
  }
`;

const stateList = {
  initial: `
    border: 1px solid var(--line);
    color: var(--titleActive);
    .header{
        color: var(--titleActive);
        background: var(--background);
        border-bottom: 1px solid var(--line);
    }
    `,
  close: `
    border: 1px solid #0025E7;
    color: #020070;
    .header{
        color: #020070;
        background: #CCD4FF;
        border-bottom: 1px solid #0025E7;
    }
  `,
  reopen: `
    border: 1px solid var(--primary-default);
    color: var(--primary-dark);
    .header{
        color: var(--primary-dark);
        background: var(--primary-light);
        border-bottom: 1px solid var(--primary-default);
    }
  `,
};
