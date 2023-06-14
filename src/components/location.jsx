import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const HeaderTitle = styled.p`
  font-size: 14px;
  color: #333;
`;

const LocationDot = styled(FontAwesomeIcon)`
  color: #5533ea;
  width: 17px;
  height: 18px;
`;

const LocationTitle = () => {
  return (
    <HeaderTitle>
      <LocationDot icon={faLocationDot} />
      New York City
    </HeaderTitle>
  );
};

export default LocationTitle;
