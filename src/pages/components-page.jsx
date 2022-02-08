import ComponentContainer from "@components/containers/component-container";
import HeaderContainer from "@components/containers/header-container";
import TemplateContainer from "@components/containers/template-container";
import StandardButton from "@components/buttons/standard-button";
import SecondaryButton from "@components/buttons/secondary-button";
import TextButton from "@components/buttons/text-button";
import TextInput from "@components/inputs/text-input";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
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
          <TemplateContainer componentType={"logotypeLarge"}>
            LogotypeLarge
          </TemplateContainer>
          <TemplateContainer componentType={"logotypeMedium"}>
            LogotypeMedium
          </TemplateContainer>
        </ComponentContainer>
        <ComponentContainer>
          <h3>Display</h3>
          <TemplateContainer componentType={"displayBold"}>
            DisplayBold
          </TemplateContainer>
          <TemplateContainer componentType={"displayRegular"}>
            DisplayRegular
          </TemplateContainer>
        </ComponentContainer>
        <ComponentContainer>
          <h3>Text</h3>
          <TemplateContainer componentType={"textLarge"}>
            TextLarge
          </TemplateContainer>
          <TemplateContainer componentType={"textMedium"}>
            TextMedium
          </TemplateContainer>
          <TemplateContainer componentType={"textSmall"}>
            TextSmall
          </TemplateContainer>
          <TemplateContainer componentType={"textXSmall"}>
            TextXSmall
          </TemplateContainer>
        </ComponentContainer>
        <ComponentContainer>
          <h3>Link</h3>
          <TemplateContainer componentType={"linkLarge"}>
            LinkLarge
          </TemplateContainer>
          <TemplateContainer componentType={"linkMedium"}>
            LinkMedium
          </TemplateContainer>
          <TemplateContainer componentType={"linkSmall"}>
            LinkSmall
          </TemplateContainer>
          <TemplateContainer componentType={"linkXSmall"}>
            LinkXSmall
          </TemplateContainer>
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
