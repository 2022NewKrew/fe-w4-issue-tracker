import styled, { css } from "styled-components";
import { randomHexColor } from "../../utils";
import { ColorCode } from "../atoms/ColorCode";
import { Input } from "../atoms/Input";
import { SmallLabel } from "../atoms/Label";
import { RadioOptionSelection } from "../atoms/RadioOptionSelection";
import { cssFontSize } from "../atoms/Text";

const EditLabelWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    padding: 32px;

    display: grid;
    grid-template-columns: 312px auto;
    grid-template-areas:
      "header header"
      "preview form"
      ". button";
  `
);

const NewLabelWrapper = styled(EditLabelWrapper)`
  border: 1px solid ${({ theme }) => theme.grayscale.line};
  border-radius: 16px;
  margin-bottom: 24px;
`;

const NewLabelHeader = styled.p`
  ${cssFontSize["large"]}
  grid-area: header;
`;

const NewLabelPreview = ({ label }) => (
  <LabelPreviewWrapper>
    <SmallLabel name={label.name !== "" ? label.name : "레이블 이름"} backgroundColor={label.backgroundColor} color={label.color} />
  </LabelPreviewWrapper>
);

const LabelPreviewWrapper = styled.div`
  grid-area: preview;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewLabelForm = ({ label, dispatch }) => (
  <LabelFormWrapper>
    <Input size="small" placeholder="레이블 이름" value={label.name} onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />
    <Input size="small" placeholder="설명(선택)" value={label.description} onChange={(e) => dispatch({ type: "CHANGE_DESCRIPTION", description: e.target.value })} />
    <ColorCode
      label="배경 색상"
      handleRefresh={() => dispatch({ type: "CHANGE_BACKGROUNDCOLOR", backgroundColor: randomHexColor() })}
      value={label.backgroundColor}
      onChange={(e) => dispatch({ type: "CHANGE_BACKGROUNDCOLOR", backgroundColor: e.target.value })}
    />
    <RadioOptionSelection
      label="글자 색깔"
      value={label.color}
      options={[
        { label: "어두운색", value: "#14142B" },
        { label: "밝은색", value: "#FEFEFE" },
      ]}
      onChange={(e) => dispatch({ type: "CHANGE_COLOR", color: e.target.value })}
    />
  </LabelFormWrapper>
);

const LabelFormWrapper = styled.div`
  grid-area: form;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;

  & > * {
    margin-bottom: 16px;
  }
`;

const LabelButtonWrapper = styled.div`
  grid-area: button;
  margin-left: auto;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;

export { EditLabelWrapper, NewLabelWrapper, NewLabelHeader, NewLabelPreview, NewLabelForm, LabelButtonWrapper };
