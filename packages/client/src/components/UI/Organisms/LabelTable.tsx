import styled from "@emotion/styled";
import {
  useLabelFormStore,
  useLabelMutation,
  useLabelStore,
} from "@stores/label";
import { Label } from "@types";
import Atoms from "@UI/Atoms";
import { CustomButton } from "@UI/Molecules";
import { useCallback } from "react";
import { LabelForm } from ".";

const LabelTable = () => {
  const { labelList, labelListCount } = useLabelStore();
  const { labelFormMode, setLabelForm, setLabelFormMode } = useLabelFormStore();
  const { removeLabel } = useLabelMutation();

  const createLabelList = useCallback(
    (labelList: Label[]) =>
      labelList.map(({ id, name, description, backgroundColor, textColor }) => {
        const onClick = () => {
          setLabelForm({ name, description, backgroundColor, textColor });
          setLabelFormMode(id);
        };
        return labelFormMode === id ? (
          <LabelForm mode={labelFormMode} />
        ) : (
          <Atoms.Li key={id}>
            <Atoms.Label
              type="custom"
              color={textColor}
              bgColor={backgroundColor}
              text={name}
            />
            <span> {description}</span>
            <Atoms.ButtonGroup gap={24}>
              <CustomButton.EditButton onClick={onClick} />
              <CustomButton.RemoveButton onClick={() => removeLabel(id)} />
            </Atoms.ButtonGroup>
          </Atoms.Li>
        );
      }),
    [labelList, labelFormMode]
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
    height: min-content;
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
