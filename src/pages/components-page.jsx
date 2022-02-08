import ComponentContainer from "@components/containers/component-container";
import HeaderContainer from "@components/containers/header-container";
import StandardButton from "@components/buttons/standard-button";
import SecondaryButton from "@components/buttons/secondary-button";
import TextButton from "@components/buttons/text-button";
import TextInput from "@components/inputs/text-input";
import Logotype from "@styles/typography/logotype";
import Display from "@styles/typography/display";
import Text from "@styles/typography/text";
import Link from "@styles/typography/link";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
      <div>
        <h2>Etc</h2>
        <ComponentContainer>
          <h3>Logotype</h3>
          <Logotype componentSize={"large"}>LogotypeLarge</Logotype>
          <Logotype componentSize={"medium"}>LogotypeMedium</Logotype>
        </ComponentContainer>
        <ComponentContainer>
          <h3>HeaderContainer</h3>
          <HeaderContainer>HeaderContainer</HeaderContainer>
        </ComponentContainer>
      </div>
      <div>
        <h2>Typography</h2>
        <ComponentContainer>
          <h3>Display</h3>
          <Display componentWeight={"bold"}>DisplayBold</Display>
          <Display componentWeight={"regular"}>DisplayRegular</Display>
        </ComponentContainer>
        <ComponentContainer>
          <h3>Text</h3>
          <Text componentSize={"large"}>TextLarge</Text>
          <Text componentSize={"medium"}>TextMedium</Text>
          <Text componentSize={"small"}>TextSmall</Text>
          <Text componentSize={"x-small"}>TextXSmall</Text>
        </ComponentContainer>
        <ComponentContainer>
          <h3>Link</h3>
          <Link componentSize={"large"}>LinkLarge</Link>
          <Link componentSize={"medium"}>LinkMedium</Link>
          <Link componentSize={"small"}>LinkSmall</Link>
          <Link componentSize={"x-small"}>LinkXSmall</Link>
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
