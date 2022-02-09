import ComponentContainer from "@components/containers/component-container";
import HeaderContainer from "@components/containers/header-container";
import TemplateContainer from "@components/containers/template-container";
import StandardButton from "@components/buttons/standard-button";
import SecondaryButton from "@components/buttons/secondary-button";
import TextButton from "@components/buttons/text-button";
import TextInput from "@components/inputs/text-input";
import sizes from "@styles/constants/sizes";

const ComponentsPage = () => {
  return (
    <div>
      <h1>TEST</h1>
      <div>
        <h2>Containers</h2>
        <ComponentContainer>
          <h3>HeaderContainer</h3>
          <HeaderContainer>HeaderContainer</HeaderContainer>
        </ComponentContainer>
      </div>
      <div>
        <h2>Templates</h2>
        <ComponentContainer>
          <h3>Logotype</h3>
          <TemplateContainer componentSize={sizes.LOGOTYPE_LARGE}>
            LogotypeLarge
          </TemplateContainer>
          <TemplateContainer componentSize={sizes.LOGOTYPE_MEDIUM}>
            LogotypeMedium
          </TemplateContainer>
        </ComponentContainer>
        <ComponentContainer>
          <h3>Display</h3>
          <TemplateContainer componentSize={sizes.DISPLAY_BOLD}>
            DisplayBold
          </TemplateContainer>
          <TemplateContainer componentSize={sizes.DISPLAY_REGULAR}>
            DisplayRegular
          </TemplateContainer>
        </ComponentContainer>
        <ComponentContainer>
          <h3>Text</h3>
          <TemplateContainer componentSize={sizes.TEXT_LARGE}>
            TextLarge
          </TemplateContainer>
          <TemplateContainer componentSize={sizes.TEXT_MEDIUM}>
            TextMedium
          </TemplateContainer>
          <TemplateContainer componentSize={sizes.TEXT_SMALL}>
            TextSmall
          </TemplateContainer>
          <TemplateContainer componentSize={sizes.TEXT_X_SMALL}>
            TextXSmall
          </TemplateContainer>
        </ComponentContainer>
        <ComponentContainer>
          <h3>Link</h3>
          <TemplateContainer componentSize={sizes.LINK_LARGE}>
            LinkLarge
          </TemplateContainer>
          <TemplateContainer componentSize={sizes.LINK_MEDIUM}>
            LinkMedium
          </TemplateContainer>
          <TemplateContainer componentSize={sizes.LINK_SMALL}>
            LinkSmall
          </TemplateContainer>
          <TemplateContainer componentSize={sizes.LINK_X_SMALL}>
            LinkXSmall
          </TemplateContainer>
        </ComponentContainer>
      </div>
      <div>
        <h2>Buttons</h2>
        <ComponentContainer>
          <h3>StandardButton</h3>
          <StandardButton componentSize={sizes.LARGE}>
            StandardButtonLarge
          </StandardButton>
          <StandardButton componentSize={sizes.MEDIUM}>
            StandardButtonMedium
          </StandardButton>
          <StandardButton componentSize={sizes.SMALL}>
            StandardButtonSmall
          </StandardButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>StandardButtonDisabled</h3>
          <StandardButton componentSize={sizes.LARGE} componentDisabled={true}>
            StandardButtonLargeDisabled
          </StandardButton>
          <StandardButton componentSize={sizes.MEDIUM} componentDisabled={true}>
            StandardButtonMediumDisabled
          </StandardButton>
          <StandardButton componentSize={sizes.SMALL} componentDisabled={true}>
            StandardButtonSmallDisabled
          </StandardButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>SecondaryButton</h3>
          <SecondaryButton componentSize={sizes.LARGE}>
            SecondaryButtonLarge
          </SecondaryButton>
          <SecondaryButton componentSize={sizes.MEDIUM}>
            SecondaryButtonMedium
          </SecondaryButton>
          <SecondaryButton componentSize={sizes.SMALL}>
            SecondaryButtonSmall
          </SecondaryButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>SecondaryButtonDisabled</h3>
          <SecondaryButton componentSize={sizes.LARGE} componentDisabled={true}>
            SecondaryButtonLargeDisabled
          </SecondaryButton>
          <SecondaryButton
            componentSize={sizes.MEDIUM}
            componentDisabled={true}
          >
            SecondaryButtonMediumDisabled
          </SecondaryButton>
          <SecondaryButton componentSize={sizes.SMALL} componentDisabled={true}>
            SecondaryButtonSmallDisabled
          </SecondaryButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TextButton</h3>
          <TextButton componentSize={sizes.LARGE}>TextButtonLarge</TextButton>
          <TextButton componentSize={sizes.MEDIUM}>TextButtonMedium</TextButton>
          <TextButton componentSize={sizes.SMALL}>TextButtonSmall</TextButton>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TextButtonDisabled</h3>
          <TextButton componentSize={sizes.LARGE} componentDisabled={true}>
            TextButtonLargeDisabled
          </TextButton>
          <TextButton componentSize={sizes.MEDIUM} componentDisabled={true}>
            TextButtonMediumDisabled
          </TextButton>
          <TextButton componentSize={sizes.SMALL} componentDisabled={true}>
            TextButtonSmallDisabled
          </TextButton>
        </ComponentContainer>
      </div>
      <div>
        <h2>Inputs</h2>
        <ComponentContainer>
          <h3>TextInput</h3>
          <TextInput componentSize={sizes.LARGE}>TextInputLarge</TextInput>
          <TextInput componentSize={sizes.MEDIUM}>TextInputMedium</TextInput>
          <TextInput componentSize={sizes.SMALL}>TextInputSmall</TextInput>
        </ComponentContainer>
        <ComponentContainer>
          <h3>TextInputDisabled</h3>
          <TextInput componentSize={sizes.LARGE} componentDisabled={true}>
            TextInputLargeDisabled
          </TextInput>
          <TextInput componentSize={sizes.MEDIUM} componentDisabled={true}>
            TextInputMediumDisabled
          </TextInput>
          <TextInput componentSize={sizes.SMALL} componentDisabled={true}>
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
