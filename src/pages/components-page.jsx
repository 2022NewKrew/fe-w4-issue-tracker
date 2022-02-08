import ComponentContainer from "@components/containers/component-container";
import HeaderContainer from "@components/containers/header-container";
import StandardButton from "@components/buttons/standard-button";
import SecondaryButton from "@components/buttons/secondary-button";
import TextButton from "@components/buttons/text-button";
import TextInput from "@components/inputs/text-input";
import TypographyLogotype from "@styles/templates/typography-logotype";
import TypographyDisplay from "@styles/templates/typography-display";
import TypographyText from "@styles/templates/typography-text";
import TypographyLink from "@styles/templates/typography-link";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
      <div>
        <h2>Etc</h2>
        <ComponentContainer>
          <h3>TypographyLogotype</h3>
          <TypographyLogotype componentSize={"large"}>
            TypographyLogotypeLarge
          </TypographyLogotype>
          <TypographyLogotype componentSize={"medium"}>
            TypographyLogotypeMedium
          </TypographyLogotype>
        </ComponentContainer>
        <ComponentContainer>
          <h3>HeaderContainer</h3>
          <HeaderContainer>HeaderContainer</HeaderContainer>
        </ComponentContainer>
      </div>
      <div>
        <h2>Typography</h2>
        <ComponentContainer>
          <h3>TypographyDisplay</h3>
          <TypographyDisplay componentWeight={"bold"}>
            TypographyDisplayBold
          </TypographyDisplay>
          <TypographyDisplay componentWeight={"regular"}>
            TypographyDisplayRegular
          </TypographyDisplay>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TypographyText</h3>
          <TypographyText componentSize={"large"}>
            TypographyTextLarge
          </TypographyText>
          <TypographyText componentSize={"medium"}>
            TypographyTextMedium
          </TypographyText>
          <TypographyText componentSize={"small"}>
            TypographyTextSmall
          </TypographyText>
          <TypographyText componentSize={"x-small"}>
            TypographyTextXSmall
          </TypographyText>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TypographyLink</h3>
          <TypographyLink componentSize={"large"}>
            TypographyLinkLarge
          </TypographyLink>
          <TypographyLink componentSize={"medium"}>
            TypographyLinkMedium
          </TypographyLink>
          <TypographyLink componentSize={"small"}>
            TypographyLinkSmall
          </TypographyLink>
          <TypographyLink componentSize={"x-small"}>
            TypographyLinkXSmall
          </TypographyLink>
        </ComponentContainer>
      </div>
      <div>
        <h2>Buttons</h2>
        <ComponentContainer>
          <h3>StandardButton</h3>
          <StandardButton componentSize={"large"}>
            StandardButtonLarge
          </StandardButton>
          <StandardButton componentSize={"medium"}>
            StandardButtonMedium
          </StandardButton>
          <StandardButton componentSize={"small"}>
            StandardButtonSmall
          </StandardButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>StandardButtonDisabled</h3>
          <StandardButton componentSize={"large"} componentDisabled={true}>
            StandardButtonLargeDisabled
          </StandardButton>
          <StandardButton componentSize={"medium"} componentDisabled={true}>
            StandardButtonMediumDisabled
          </StandardButton>
          <StandardButton componentSize={"small"} componentDisabled={true}>
            StandardButtonSmallDisabled
          </StandardButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>SecondaryButton</h3>
          <SecondaryButton componentSize={"large"}>
            SecondaryButtonLarge
          </SecondaryButton>
          <SecondaryButton componentSize={"medium"}>
            SecondaryButtonMedium
          </SecondaryButton>
          <SecondaryButton componentSize={"small"}>
            SecondaryButtonSmall
          </SecondaryButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>SecondaryButtonDisabled</h3>
          <SecondaryButton componentSize={"large"} componentDisabled={true}>
            SecondaryButtonLargeDisabled
          </SecondaryButton>
          <SecondaryButton componentSize={"medium"} componentDisabled={true}>
            SecondaryButtonMediumDisabled
          </SecondaryButton>
          <SecondaryButton componentSize={"small"} componentDisabled={true}>
            SecondaryButtonSmallDisabled
          </SecondaryButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TextButton</h3>
          <TextButton componentSize={"large"}>TextButtonLarge</TextButton>
          <TextButton componentSize={"medium"}>TextButtonMedium</TextButton>
          <TextButton componentSize={"small"}>TextButtonSmall</TextButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TextButtonDisabled</h3>
          <TextButton componentSize={"large"} componentDisabled={true}>
            TextButtonLargeDisabled
          </TextButton>
          <TextButton componentSize={"medium"} componentDisabled={true}>
            TextButtonMediumDisabled
          </TextButton>
          <TextButton componentSize={"small"} componentDisabled={true}>
            TextButtonSmallDisabled
          </TextButton>
        </ComponentContainer>
      </div>
      <div>
        <h2>Inputs</h2>
        <ComponentContainer>
          <h3>TextInput</h3>
          <TextInput componentSize={"large"}>TextInputLarge</TextInput>
          <TextInput componentSize={"medium"}>TextInputMedium</TextInput>
          <TextInput componentSize={"small"}>TextInputSmall</TextInput>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TextInputDisabled</h3>
          <TextInput componentSize={"large"} componentDisabled={true}>
            TextInputLargeDisabled
          </TextInput>
          <TextInput componentSize={"medium"} componentDisabled={true}>
            TextInputMediumDisabled
          </TextInput>
          <TextInput componentSize={"small"} componentDisabled={true}>
            TextInputSmallDisabled
          </TextInput>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TextArea</h3>
        </ComponentContainer>
        <ComponentContainer>
          <h3>ColorCode</h3>
        </ComponentContainer>
      </div>
    </div>
  );
};

export default ComponentsPage;
