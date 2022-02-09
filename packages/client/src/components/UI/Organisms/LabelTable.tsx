import styled from "@emotion/styled";
import { useLabelStore } from "@stores/label";
import { Label } from "@types";
import Atoms from "@UI/Atoms";
import { useCallback } from "react";

const LabelTable = () => {
  const { labelList } = useLabelStore();

  const createLabelList = useCallback(
    (labelList: Label[]) =>
      labelList.map(({ id, name, description, backgroundColor }) => (
        <Atoms.Li key={id}>
          <Atoms.Label type="custom" color={backgroundColor}>
            {name}
          </Atoms.Label>
          {description}
          <Atoms.ButtonGroup gap={24}>
            <Atoms.Button size="small" shape="text" icon="edit">
              편집
            </Atoms.Button>
            <Atoms.Button size="small" shape="text" icon="trash_red">
              삭제
            </Atoms.Button>
          </Atoms.ButtonGroup>
        </Atoms.Li>
      )),
    [labelList]
  );

  return (
    <Wrapper>
      <Atoms.Li header>3개의 레이블</Atoms.Li>
      {createLabelList(labelList)}
    </Wrapper>
  );
};

export default LabelTable;

const Wrapper = styled.ul`
  margin-top: 24px;
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  & > li {
    & > .Label {
      position: absolute;
      left: 32px;
    }
    & > .ButtonGroup > button:last-child {
      color: red;
      & > svg {
        opacity: 1;
      }
    }
  }
`;
