import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect } from "react";
import Loader from "../Loader";

const Callback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code"); //TODO: 서버에 보낼 코드 값
  console.log(code);

  //TODO: 서버와 통신 후 로그인창(혹은 메인창)으로 이동 예정
  useEffect(() => {
    setTimeout(() => {
      // navigate("/login");
    }, 3000);
  }, []);

  return (
    <Loader
      css="display: block;
  margin: 0 auto;"
      loading={true}
      size={100}
      message="사용자 확인 중"
    />
  );
};
export default Callback;
