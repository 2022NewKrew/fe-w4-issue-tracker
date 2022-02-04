import Container from "@components/etc/container";
import Logotype from "@components/etc/logotype";
import Display from "@components/typography/display";
import Text from "@components/typography/text";
import Link from "@components/typography/link";
import StandardButton from "@components/buttons/standard-button";
import SecondaryButton from "@components/buttons/secondary-button";

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
          <h3>Display</h3>
          <Display type="bold">DisplayBold</Display>
          <Display type="regular">DisplayRegular</Display>
        </Container>
        <Container>
          <h3>Text</h3>
          <Text type="large">TextLarge</Text>
          <Text type="medium">TextMedium</Text>
          <Text type="small">TextSmall</Text>
          <Text type="x-small">TextXSmall</Text>
        </Container>
        <Container>
          <h3>Link</h3>
          <Link type="large">LinkLarge</Link>
          <Link type="medium">LinkMedium</Link>
          <Link type="small">LinkSmall</Link>
          <Link type="x-small">LinkXSmall</Link>
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
      </div>
    </div>
  );
};

export default ComponentsPage;
