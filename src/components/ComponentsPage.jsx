import Logotype from "@components/etc/logotype";
import Display from "@components/typography/display";
import Text from "@components/typography/text";
import Link from "@components/typography/link";
import StandardButton from "@components/buttons/standard-button";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
      <div>
        <h2>Etc</h2>
        <div>
          <h3>Logotype</h3>
          <Logotype type="large">LogotypeLarge</Logotype>
          <Logotype type="regular">LogotypeRegular</Logotype>
        </div>
      </div>
      <div>
        <h2>Typography</h2>
        <div>
          <h3>Display</h3>
          <Display type="bold">DisplayBold</Display>
          <Display type="regular">DisplayRegular</Display>
        </div>
        <div>
          <h3>Text</h3>
          <Text type="large">TextLarge</Text>
          <Text type="medium">TextMedium</Text>
          <Text type="small">TextSmall</Text>
          <Text type="x-small">TextXSmall</Text>
        </div>
        <div>
          <h3>Link</h3>
          <Link type="large">LinkLarge</Link>
          <Link type="medium">LinkMedium</Link>
          <Link type="small">LinkSmall</Link>
          <Link type="x-small">LinkXSmall</Link>
        </div>
      </div>
      <div>
        <h2>Buttons</h2>
        <div>
          <h3>StandardButton</h3>
          <StandardButton type="large">StandardButtonLarge</StandardButton>
          <StandardButton type="medium">StandardButtonMedium</StandardButton>
          <StandardButton type="small">StandardButtonSmall</StandardButton>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
