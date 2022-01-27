import React from "react";
import { ReactComponent as LargeLogo } from "@/assets/LogotypeLarge.svg";
import { ReactComponent as MediumLogo } from "@/assets/LogotypeMedium.svg";

const LogotypeLarge: React.FC = () => {
  const LargeLogoProps = {
    width: "340px",
    height: "43px",
    fill: "#14142B",
  };
  return (
    <>
      <LargeLogo {...LargeLogoProps} />
    </>
  );
};
const LogotypeMedium: React.FC = () => {
  const MediumLogoProps = {
    fill: "#14142B",
  };
  return (
    <>
      <MediumLogo {...MediumLogoProps} />
    </>
  );
};

export { LogotypeLarge, LogotypeMedium };
