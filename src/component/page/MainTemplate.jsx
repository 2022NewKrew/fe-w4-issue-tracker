import styled from "styled-components";
import { MediumLogo } from "../atoms/Logo";
import userImageLarge from "../../assets/UserImageLarge.png";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => (
  <BodyWrapper>
    <MainHeader>
      <MediumLogo />
      <UserImage src={userImageLarge} />
    </MainHeader>

    <Outlet />
  </BodyWrapper>
);

const BodyWrapper = styled.div`
  margin: 0px auto;
  width: 1280px;
`;

const MainHeader = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  margin-left: auto;
`;
