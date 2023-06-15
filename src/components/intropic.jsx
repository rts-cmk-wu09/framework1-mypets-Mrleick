import React from "react";
import styled from "styled-components";
import intropic from "../assets/cat.png";

const Styledintropic = styled.img`
  
`;

const ProfileContainer = styled.div`

`;

const ProfilePic = () => {
  return (
    <ProfileContainer>
      <Styledintropic src={intropic} alt="Intro picture" />
    </ProfileContainer>
  );
};

export default ProfilePic;
