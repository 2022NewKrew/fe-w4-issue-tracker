import Container from "@components/etc/container";
import Logotype from "@components/etc/logotype";
import CustomDisplay from "@components/typography/custom-display";
import CustomText from "@components/typography/custom-text";
import CustomLink from "@components/typography/custom-link";
import StandardButton from "@components/buttons/standard-button";
import SecondaryButton from "@components/buttons/secondary-button";
import TextButton from "@components/buttons/text-button";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
      <div>
        <h2>Etc</h2>
        <Container>
          <h3>Logotype</h3>
          <Logotype type="large">LogotypeLarge</Logotype>
          <Logotype type="regular">LogotypeRegular</Logotype>
        </Container>
      </div>
      <div>
        <h2>Typography</h2>
        <Container>
          <h3>CustomDisplay</h3>
          <CustomDisplay type="bold">CustomDisplayBold</CustomDisplay>
          <CustomDisplay type="regular">CustomDisplayRegular</CustomDisplay>
        </Container>
        <Container>
          <h3>CustomText</h3>
          <CustomText type="large">CustomTextLarge</CustomText>
          <CustomText type="medium">CustomTextMedium</CustomText>
          <CustomText type="small">CustomTextSmall</CustomText>
          <CustomText type="x-small">CustomTextXSmall</CustomText>
        </Container>
        <Container>
          <h3>CustomLink</h3>
          <CustomLink type="large">CustomLinkLarge</CustomLink>
          <CustomLink type="medium">CustomLinkMedium</CustomLink>
          <CustomLink type="small">CustomLinkSmall</CustomLink>
          <CustomLink type="x-small">CustomLinkXSmall</CustomLink>
        </Container>
      </div>
      <div>
        <h2>Buttons</h2>
        <Container>
          <h3>StandardButton</h3>
          <StandardButton type="large">StandardButtonLarge</StandardButton>
          <StandardButton type="medium">StandardButtonMedium</StandardButton>
          <StandardButton type="small">StandardButtonSmall</StandardButton>
        </Container>
        <Container>
          <h3>SecondaryButton</h3>
          <SecondaryButton type="large">SecondaryButtonLarge</SecondaryButton>
          <SecondaryButton type="medium">SecondaryButtonMedium</SecondaryButton>
          <SecondaryButton type="small">SecondaryButtonSmall</SecondaryButton>
        </Container>
        <Container>
          <h3>CustomTextButton</h3>
          <TextButton type="large">TextButtonLarge</TextButton>
          <TextButton type="medium">TextButtonMedium</TextButton>
          <TextButton type="small">TextButtonSmall</TextButton>
        </Container>
      </div>
      <div>
        <h2>CustomTextInputs</h2>
        <Container>
          <h3>CustomTextInput</h3>
        </Container>
        <Container>
          <h3>CustomTextArea</h3>
        </Container>
        <Container>
          <h3>ColorCode</h3>
        </Container>
      </div>
    </div>
  );
};

export default ComponentsPage;
