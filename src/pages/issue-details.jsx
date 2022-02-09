import TemplateContainer from "@components/containers/template-container";
import HeaderContainer from "@components/containers/header-container";
import sizes from "@styles/constants/sizes";

const IssueDetails = () => {
  return (
    <div>
      <HeaderContainer>Issue Tracker</HeaderContainer>
      <TemplateContainer componentsSize={sizes.DISPLAY_REGULAR}>
        FE 이슈트래커 디자인 시스템 구현
      </TemplateContainer>
    </div>
  );
};

export default IssueDetails;
