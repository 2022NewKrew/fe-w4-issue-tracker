import DisplayBold from "@components/display/display-bold";
import DisplayRegular from "@components/display/display-regular";
import LinkLarge from "@components/link/link-large";
import LinkMedium from "@components/link/link-medium";
import LinkSmall from "@components/link/link-small";
import LinkXSmall from "@components/link/link-x-small";
import LogotypeLarge from "@components/logotype/logotype-large";
import LogotypeRegular from "@components/logotype/logotype-regular";
import TextLarge from "@components/text/text-large";
import TextMedium from "@components/text/text-medium";
import TextSmall from "@components/text/text-small";
import TextXSmall from "@components/text/text-x-small";

const ComponentsPage = () => {
  return (
    <div>
      <h1>ComponentsPage</h1>
      <div>
        <h2>Display</h2>
        <DisplayBold>DisplayBold</DisplayBold>
        <DisplayRegular>DisplayRegular</DisplayRegular>
      </div>
      <div>
        <h2>Link</h2>
        <LinkLarge>LinkLarge</LinkLarge>
        <LinkMedium>LinkMedium</LinkMedium>
        <LinkSmall>LinkSmall</LinkSmall>
        <LinkXSmall>LinkXSmall</LinkXSmall>
      </div>
      <div>
        <h2>Logotype</h2>
        <LogotypeLarge>LogotypeLarge</LogotypeLarge>
        <LogotypeRegular>LogotypeRegular</LogotypeRegular>
      </div>
      <div>
        <h2>Text</h2>
        <TextLarge>TextLarge</TextLarge>
        <TextMedium>TextMedium</TextMedium>
        <TextSmall>TextSmall</TextSmall>
        <TextXSmall>TextXSmall</TextXSmall>
      </div>
    </div>
  );
};

export default ComponentsPage;
