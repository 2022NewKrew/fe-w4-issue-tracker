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
        <Container customType={"regular"}>
          <h3>Logotype</h3>
          <Logotype customType={"large"}>LogotypeLarge</Logotype>
          <Logotype customType={"medium"}>LogotypeMedium</Logotype>
        </Container>
        <Container customType={"regular"}>
          <h3>CustomHeader</h3>
          <CustomHeader>CustomHeader</CustomHeader>
        </Container>
      </div>
      <div>
        <h2>Typography</h2>
        <Container customType={"regular"}>
          <h3>CustomDisplay</h3>
          <CustomDisplay customType={"bold"}>CustomDisplayBold</CustomDisplay>
          <CustomDisplay customType={"regular"}>
            CustomDisplayRegular
          </CustomDisplay>
        </Container>
        <Container customType={"regular"}>
          <h3>CustomText</h3>
          <CustomText customType={"large"}>CustomTextLarge</CustomText>
          <CustomText customType={"medium"}>CustomTextMedium</CustomText>
          <CustomText customType={"small"}>CustomTextSmall</CustomText>
          <CustomText customType={"x-small"}>CustomTextXSmall</CustomText>
        </Container>
        <Container customType={"regular"}>
          <h3>CustomLink</h3>
          <CustomLink customType={"large"}>CustomLinkLarge</CustomLink>
          <CustomLink customType={"medium"}>CustomLinkMedium</CustomLink>
          <CustomLink customType={"small"}>CustomLinkSmall</CustomLink>
          <CustomLink customType={"x-small"}>CustomLinkXSmall</CustomLink>
        </Container>
      </div>
      <div>
        <h2>Buttons</h2>
        <Container customType={"regular"}>
          <h3>StandardButton</h3>
          <StandardButton customType={"large"}>
            StandardButtonLarge
          </StandardButton>
          <StandardButton customType={"medium"}>
            StandardButtonMedium
          </StandardButton>
          <StandardButton customType={"small"}>
            StandardButtonSmall
          </StandardButton>
          <StandardButton customType={"large"} customState={"disabled"}>
            StandardButtonLargeDisabled
          </StandardButton>
          <StandardButton customType={"medium"} customState={"disabled"}>
            StandardButtonMediumDisabled
          </StandardButton>
          <StandardButton customType={"small"} customState={"disabled"}>
            StandardButtonSmallDisabled
          </StandardButton>
        </Container>
        <Container customType={"regular"}>
          <h3>SecondaryButton</h3>
          <SecondaryButton customType={"large"}>
            SecondaryButtonLarge
          </SecondaryButton>
          <SecondaryButton customType={"medium"}>
            SecondaryButtonMedium
          </SecondaryButton>
          <SecondaryButton customType={"small"}>
            SecondaryButtonSmall
          </SecondaryButton>
        </Container>
        <Container customType={"regular"}>
          <h3>CustomTextButton</h3>
          <TextButton customType={"large"}>TextButtonLarge</TextButton>
          <TextButton customType={"medium"}>TextButtonMedium</TextButton>
          <TextButton customType={"small"}>TextButtonSmall</TextButton>
        </Container>
      </div>
      <div>
        <h2>Inputs</h2>
        <Container customType={"regular"}>
          <h3>TextInput</h3>
          <TextInput customType={"large"}>TextInputLarge</TextInput>
          <TextInput customType={"medium"}>TextInputMedium</TextInput>
          <TextInput customType={"small"}>TextInputSmall</TextInput>
        </Container>
        <Container customType={"regular"}>
          <h3>TextArea</h3>
        </Container>
        <Container customType={"regular"}>
          <h3>ColorCode</h3>
        </Container>
      </div>
    </div>
  );
};

export default ComponentsPage;
