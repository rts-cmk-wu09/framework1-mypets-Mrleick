import React from "react";
import styled from "styled-components";
import profilepic from "../assets/profilepic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import NotificationButton from "../components/notibutton";
import SortButton from "../components/sortbutton";

// Styled Header Container
const HeaderContainer = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

// Styled Header Title
const HeaderTitle = styled.p`
  font-size: 14px;
  color: #333;
  margin-left: 20px;
`;

const ProfilePicImage = styled.img`
  width: 36.36px;
  height: 36.36px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 2px;
  margin-left: 1px;
`;

const ProfileContainer = styled.div`
  width: 40px;
  height: 40px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 50%;
`;

const LocationDot = styled(FontAwesomeIcon)`
  color: #5533ea;
  width: 17px;
  height: 18px;
`;

const SortButtonsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  padding-bottom: 44px;
  gap: 20px;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ProfileContainer>
            <ProfilePicImage src={profilepic} alt="Profile Picture" />
          </ProfileContainer>
          <HeaderTitle>
            <LocationDot icon={faLocationDot} />
            New York City
          </HeaderTitle>
        </div>
        <NotificationButton />
      </HeaderContainer>
      <SortButtonsContainer>
        <SortButton />
        <SortButton />
        <SortButton />
        <SortButton />
      </SortButtonsContainer>
    </>
  );
};

export default Header;
