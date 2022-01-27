import styled from "styled-components";
import { MediumLogo } from "../../atoms/Logo";
import userImageLarge from "../../../assets/UserImageLarge.png";
import { Outlet } from "react-router-dom";

const state = {};

export const IssuePage = () => {
  return (
    <BodyWrapper>
      <MainHeader>
        <MediumLogo />
        <img src={userImageLarge} />
      </MainHeader>

      <Outlet />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 1280px;
`;

const MainHeader = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  align-items: center;

  & > *:last-child {
    margin-left: auto;
  }
`;
