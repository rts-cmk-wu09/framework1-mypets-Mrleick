import styled from "styled-components";
import Circlebutton from "../components/circlebutton";
import LocationTitle from "../components/location";
import ProfilePic from "../components/profilepic";

const HeaderContainer = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 44px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProfilePic />
      <LocationTitle />
      <Circlebutton />
    </HeaderContainer>
  );
};

export default Header;
