import React from "react";
import {
  LargeButton,
  MediumButton,
  SmallButton,
  SecondaryButton,
  MediumTextButton,
  SmallTextButton,
} from "../components/buttons/buttons";

import {
  LargeTextInput,
  MediumTextInput,
} from "../components/textInputs/textInputs";

export default function Main() {
  return (
    <div>
      Main Page <br />
      <LargeButton>라지버튼</LargeButton>
      <MediumButton>미디엄버튼</MediumButton>
      <SmallButton>스몰버튼</SmallButton>
      <br />
      <SecondaryButton>세컨데리</SecondaryButton>
      <MediumTextButton>미디엄</MediumTextButton>
      <SmallTextButton>스몰</SmallTextButton>
      <br />
      <LargeTextInput />
      <MediumTextInput />
    </div>
  );
}
