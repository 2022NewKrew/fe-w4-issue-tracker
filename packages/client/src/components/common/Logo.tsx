import LogoLarge from "@assets/icons/LogotypeLarge.svg";
import LogoMedium from "@assets/icons/LogotypeMedium.svg";

interface Props {
  size?: "large" | "medium";
}

const Logo = ({ size = "large" }: Props) => {
  if (size === "large") {
    return <LogoLarge />;
  }
  return <LogoMedium />;
};

export default Logo;
