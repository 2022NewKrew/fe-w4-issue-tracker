import Login from "@pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      {/* <button css={ButtionStyle("primary", true).large}>Button</button>
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
      <div css={TextAreaStyle}>
        <textarea {...test} placeholder=" "></textarea>
        <label>코멘트를 입력하세요</label>
        <span />
        <button>파일 첨부하기</button>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/issueList" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
