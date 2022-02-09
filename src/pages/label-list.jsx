import TemplateContainer from "@components/containers/template-container";
import HeaderContainer from "@components/containers/header-container";
import sizes from "@styles/constants/sizes";

const LabelList = () => {
  return (
    <div>
      <HeaderContainer>Issue Tracker</HeaderContainer>
      <TemplateContainer componentsSize={sizes.DISPLAY_REGULAR}>
        레이블 목록
      </TemplateContainer>
    </div>
  );
};

export default LabelList;
