import TemplateContainer from "@components/containers/template-container";
import HeaderContainer from "@components/containers/header-container";
import sizes from "@styles/constants/sizes";

const MilestoneList = () => {
  return (
    <div>
      <HeaderContainer>Issue Tracker</HeaderContainer>
      <TemplateContainer componentsSize={sizes.DISPLAY_REGULAR}>
        마일스톤 목록
      </TemplateContainer>
    </div>
  );
};

export default MilestoneList;
