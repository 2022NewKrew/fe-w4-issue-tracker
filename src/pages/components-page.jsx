import Container from "@components/etc/container";
import Logotype from "@components/etc/logotype";
import CustomHeader from "@components/etc/custom-header";
import CustomDisplay from "@components/typography/custom-display";
import CustomText from "@components/typography/custom-text";
import CustomLink from "@components/typography/custom-link";
import StandardButton from "@components/buttons/standard-button";
import SecondaryButton from "@components/buttons/secondary-button";
import TextButton from "@components/buttons/text-button";
import TextInput from "@components/inputs/text-input";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
      <div>
        <h2>Etc</h2>
        <Container>
          <h3>Logotype</h3>
          <Logotype componentSize={"large"}>LogotypeLarge</Logotype>
          <Logotype componentSize={"medium"}>LogotypeMedium</Logotype>
        </Container>
        <Container>
          <h3>CustomHeader</h3>
          <CustomHeader>CustomHeader</CustomHeader>
        </Container>
      </div>
      <div>
        <h2>Typography</h2>
        <Container>
          <h3>CustomDisplay</h3>
          <CustomDisplay componentWeight={"bold"}>
            CustomDisplayBold
          </CustomDisplay>
          <CustomDisplay componentWeight={"regular"}>
            CustomDisplayRegular
          </CustomDisplay>
        </Container>
        <Container>
          <h3>CustomText</h3>
          <CustomText componentSize={"large"}>CustomTextLarge</CustomText>
          <CustomText componentSize={"medium"}>CustomTextMedium</CustomText>
          <CustomText componentSize={"small"}>CustomTextSmall</CustomText>
          <CustomText componentSize={"x-small"}>CustomTextXSmall</CustomText>
        </Container>
        <Container>
          <h3>CustomLink</h3>
          <CustomLink componentSize={"large"}>CustomLinkLarge</CustomLink>
          <CustomLink componentSize={"medium"}>CustomLinkMedium</CustomLink>
          <CustomLink componentSize={"small"}>CustomLinkSmall</CustomLink>
          <CustomLink componentSize={"x-small"}>CustomLinkXSmall</CustomLink>
        </Container>
      </div>
      <div>
        <h2>Buttons</h2>
        <Container>
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
        </Container>
        <Container>
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
        </Container>
        <Container>
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
        </Container>
        <Container>
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
        </Container>
        <Container>
          <h3>CustomTextButton</h3>
          <TextButton componentSize={"large"}>TextButtonLarge</TextButton>
          <TextButton componentSize={"medium"}>TextButtonMedium</TextButton>
          <TextButton componentSize={"small"}>TextButtonSmall</TextButton>
        </Container>
        <Container>
          <h3>CustomTextButtonDisabled</h3>
          <TextButton componentSize={"large"} componentDisabled={true}>
            TextButtonLargeDisabled
          </TextButton>
          <TextButton componentSize={"medium"} componentDisabled={true}>
            TextButtonMediumDisabled
          </TextButton>
          <TextButton componentSize={"small"} componentDisabled={true}>
            TextButtonSmallDisabled
          </TextButton>
        </Container>
      </div>
      <div>
        <h2>Inputs</h2>
        <Container>
          <h3>TextInput</h3>
          <TextInput componentSize={"large"}>TextInputLarge</TextInput>
          <TextInput componentSize={"medium"}>TextInputMedium</TextInput>
          <TextInput componentSize={"small"}>TextInputSmall</TextInput>
        </Container>
        <Container>
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
        </Container>
        <Container>
          <h3>TextArea</h3>
        </Container>
        <Container>
          <h3>ColorCode</h3>
        </Container>
      </div>
    </div>
  );
};

export default ComponentsPage;
