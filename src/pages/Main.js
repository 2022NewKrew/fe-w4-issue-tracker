import React from "react";
import {
  LargeButton,
  MediumButton,
  SmallButton,
  SecondaryButton,
  MediumTextButton,
  SmallTextButton,
} from "@components/buttons";

import {
  LargeTextInput,
  MediumTextInput,
  SmallTextInput,
} from "@components/textInputs";

import { ReactComponent as Logo } from "../assets/icons/logo.svg";

import { firebaseAuth } from "../firebase";

import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/atoms";

import { Cookies } from "react-cookie";

export default function Main() {
  const setUser = useSetRecoilState(userState);
  const cookies = new Cookies();

  function logout() {
    firebaseAuth.signOut();
    setUser(null);
    cookies.remove("user");
  }
  return (
    <div>
      Main Page <br />
      <LargeButton color='black'>라지버튼</LargeButton>
      <MediumButton color='blue'>미디엄버튼</MediumButton>
      <SmallButton>스몰버튼</SmallButton>
      <br />
      <SecondaryButton>세컨데리</SecondaryButton>
      <MediumTextButton>미디엄</MediumTextButton>
      <SmallTextButton>스몰</SmallTextButton>
      <br />
      <LargeTextInput />
      <MediumTextInput />
      <SmallTextInput />
      <br />
      <Logo />
      <br />
      <SmallButton onClick={logout}>로그아웃 하러 가기</SmallButton>
    </div>
  );
}
