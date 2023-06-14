import styled from "styled-components";
import NotificationButton from "../components/notibutton";
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
      <NotificationButton />
    </HeaderContainer>
  );
};

export default Header;
