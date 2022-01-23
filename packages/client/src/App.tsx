import { ButtionStyle } from "@styles/button";

const App: React.FC = () => (
  <>
    <button css={ButtionStyle("primary", true).large}>Button</button>
    <button disabled css={ButtionStyle("success").medium}>
      Button
    </button>
    <button css={ButtionStyle("error").small}>Button</button>
  </>
);

export default App;
