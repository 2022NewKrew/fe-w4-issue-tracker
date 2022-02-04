import Display from "@components/display";
import Link from "@components/link";
import Logotype from "@components/logotype";
import Text from "@components/text";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
      <div>
        <h2>Logotype</h2>
        <Logotype type="large">LogotypeLarge</Logotype>
        <Logotype>LogotypeRegular</Logotype>
      </div>
      <div>
        <h2>Display</h2>
        <Display type="bold">DisplayBold</Display>
        <Display>DisplayRegular</Display>
      </div>
      <div>
        <h2>Text</h2>
        <Text type="large">TextLarge</Text>
        <Text type="medium">TextMedium</Text>
        <Text type="small">TextSmall</Text>
        <Text>TextXSmall</Text>
      </div>
      <div>
        <h2>Link</h2>
        <Link type="large">LinkLarge</Link>
        <Link type="medium">LinkMedium</Link>
        <Link type="small">LinkSmall</Link>
        <Link>LinkXSmall</Link>
      </div>
    </div>
  );
};

export default ComponentsPage;
