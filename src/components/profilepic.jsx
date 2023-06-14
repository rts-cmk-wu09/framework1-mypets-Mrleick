import React from "react";
import styled from "styled-components";
import profilepic from "../assets/profilepic.png";

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

const ProfilePic = () => {
  return (
    <ProfileContainer>
      <ProfilePicImage src={profilepic} alt="Profile Picture" />
    </ProfileContainer>
  );
};

export default ProfilePic;
