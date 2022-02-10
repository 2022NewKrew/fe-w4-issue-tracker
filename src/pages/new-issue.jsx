import TemplateContainer from "@components/containers/template-container";
import HeaderContainer from "@components/containers/header-container";
import sizes from "@styles/constants/sizes";

const NewIssue = () => {
  return (
    <div>
      <HeaderContainer>Issue Tracker</HeaderContainer>
      <TemplateContainer componentsSize={sizes.DISPLAY_REGULAR}>
        새로운 이슈 작성
      </TemplateContainer>
    </div>
  );
};

export default NewIssue;
