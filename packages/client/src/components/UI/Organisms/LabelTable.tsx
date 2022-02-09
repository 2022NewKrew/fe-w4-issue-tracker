import styled from "@emotion/styled";
import { useLabelStore } from "@stores/label";
import { Label } from "@types";
import Atoms from "@UI/Atoms";
import { useCallback } from "react";

const LabelTable = () => {
  const { labelList, labelListCount } = useLabelStore();

  const createLabelList = useCallback(
    (labelList: Label[]) =>
      labelList.map(({ id, name, description, backgroundColor, textColor }) => (
        <Atoms.Li key={id}>
          <Atoms.Label
            type="custom"
            color={textColor}
            bgColor={backgroundColor}
            text={name}
          />
          {description}
          <Atoms.ButtonGroup gap={24}>
            <Atoms.Button size="small" shape="text" icon="edit" text="편집" />
            <Atoms.Button
              size="small"
              shape="text"
              icon="trash_red"
              text="삭제"
            />
          </Atoms.ButtonGroup>
        </Atoms.Li>
      )),
    [labelList]
  );

  return (
    <Wrapper>
      <Atoms.Li header>{labelListCount}개의 레이블</Atoms.Li>
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
    padding: 0 32px;
    & > .Label {
      position: absolute;
      left: 32px;
    }
    & > .ButtonGroup {
      position: absolute;
      right: 32px;
      & > button:last-child {
        color: red;
        & > svg {
          opacity: 1;
        }
      }
    }
    &:first-of-type {
      height: 64px;
    }
    &:not(:first-of-type) {
      height: 100px;
      padding-left: 240px;
    }
  }
`;
