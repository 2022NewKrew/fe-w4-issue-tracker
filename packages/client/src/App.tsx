import useInput from "@hooks/useInput";
import { ButtionStyle } from "@styles/button";
import { InputStyle, InputTextWrapper } from "@styles/textInput";

const App: React.FC = () => {
  const test = useInput("");
  return (
    <>
      <button css={ButtionStyle("primary", true).large}>Button</button>
      <button disabled css={ButtionStyle("success").medium}>
        Button
      </button>
      <button css={ButtionStyle("error").small}>Button</button>
      <div css={InputTextWrapper}>
        <input
          id="userId"
          css={InputStyle.large}
          type="text"
          {...test}
          pattern="[a-z0-9_]{4,20}"
          required
        />
        <label htmlFor="userId">아이디</label>
      </div>
    </>
  );
};

export default App;
