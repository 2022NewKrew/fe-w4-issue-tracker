import useInput from "@hooks/useInput";
import { ButtionStyle } from "@styles/button";
import { TextAreaStyle } from "@styles/textArea";
import { TextInputStyle } from "@styles/textInput";

const App: React.FC = () => {
  const test = useInput("");
  return (
    <>
      <button css={ButtionStyle("primary", true).large}>Button</button>
      <button disabled css={ButtionStyle("success").medium}>
        Button
      </button>
      <button css={ButtionStyle("error").small}>Button</button>
      <div css={TextInputStyle.large}>
        <input
          id="userId"
          type="text"
          {...test}
          pattern="[a-z0-9_]{4,20}"
          required
        />
        <label htmlFor="userId">아이디</label>
      </div>
      <div css={TextInputStyle.medium}>
        <input
          id="userId"
          type="text"
          {...test}
          pattern="[a-z0-9_]{4,20}"
          required
        />
        <label htmlFor="userId">아이디</label>
      </div>
      <div css={TextInputStyle.small}>
        <input
          id="userId"
          type="text"
          {...test}
          pattern="[a-z0-9_]{4,20}"
          required
        />
        <label htmlFor="userId">아이디</label>
      </div>
      <div css={TextAreaStyle}>
        <textarea {...test} placeholder=" "></textarea>
        <label>코멘트를 입력하세요</label>
        <span />
        <button>파일 첨부하기</button>
      </div>
    </>
  );
};

export default App;
