import React from "react";
import {
  LargeButton,
  MediumButton,
  SmallButton,
  SecondaryButton,
  MediumTextButton,
  SmallTextButton,
} from "@components/buttons/buttons";

import {
  LargeTextInput,
  MediumTextInput,
  SmallTextInput,
} from "@components/textInputs/textInputs";

import { ReactComponent as Logo } from "../components/icons/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Main() {
  let navigate = useNavigate();
  return (
    <div>
      Main Page <br />
      <LargeButton color='BLACK'>라지버튼</LargeButton>
      <MediumButton color='BLUE'>미디엄버튼</MediumButton>
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
      <Logo onClick={() => navigate("/login")} />
    </div>
  );
}
