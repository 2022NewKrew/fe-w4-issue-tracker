import Logotype from "@components/etc/logotype";
import Display from "@components/typography/display";
import Text from "@components/typography/text";
import Link from "@components/typography/link";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
      <div>
        <h2>Logotype</h2>
        <Logotype type="large">LogotypeLarge</Logotype>
        <Logotype type="regular">LogotypeRegular</Logotype>
      </div>
      <div>
        <h2>Display</h2>
        <Display type="bold">DisplayBold</Display>
        <Display type="regular">DisplayRegular</Display>
      </div>
      <div>
        <h2>Text</h2>
        <Text type="large">TextLarge</Text>
        <Text type="medium">TextMedium</Text>
        <Text type="small">TextSmall</Text>
        <Text type="x-small">TextXSmall</Text>
      </div>
      <div>
        <h2>Link</h2>
        <Link type="large">LinkLarge</Link>
        <Link type="medium">LinkMedium</Link>
        <Link type="small">LinkSmall</Link>
        <Link type="x-small">LinkXSmall</Link>
      </div>
    </div>
  );
};

export default ComponentsPage;
