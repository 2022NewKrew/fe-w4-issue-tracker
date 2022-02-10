import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Panel } from "@/components/molecules";
import { Indicator } from "@/components/atoms";
import { IStyle } from "@/constants/type";
import { useIssueStore } from "@/stores/issue";

interface DropDownProp {
  onClick?: VoidFunction;
  styles?: IStyle;
  title?: string;
  optionList: any[];
}
const DropDown: React.FC<DropDownProp> = ({ onClick, styles, children, optionList }) => {
  const [visible, setVisible] = useState(false);
  const Props = {
    WrapProp: { onClick },
    IndicatorProp: {
      onClick: () => {
        setVisible(!visible);
      },
      styles: { width: styles?.width ?? "100px" },
    },
    PanelProps: {
      type: "text",
      optionList,
      visible,
      title: "이슈 필터",
      styles: {
        childCSS: css`
          position: absolute;
          top: 48px;
          right: ${styles?.right ?? ""};
        `,
      },
    },
  };
  return (
    <DropDownWrap {...Props.WrapProp}>
      <Indicator {...Props.IndicatorProp}>{children}</Indicator>
      <Panel {...Props.PanelProps} />
    </DropDownWrap>
  );
};

const DropDownWrap = styled.div<IStyle>`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 1;
  position: relative;
`;
export default DropDown;
