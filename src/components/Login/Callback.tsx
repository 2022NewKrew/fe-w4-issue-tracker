import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Loader from "../Loader";

const Callback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
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
