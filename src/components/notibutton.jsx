import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Button = styled.button`
  background: #f5f5f9;
  width: 40px;
  height: 40px;
  border: none;
  font-size: 16px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
  }
`;

const BellIcon = styled(FontAwesomeIcon)`
  color: #5533EA;; /* Set the desired color */
  width: 17px;
  height: 18px;
`;

const NotificationButton = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleClick = () => {
    setNotificationCount(notificationCount + 1);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <BellIcon icon={faBell} />
      </Button>
      {notificationCount > 0 && <span>{notificationCount}</span>}
    </div>
  );
};

export default NotificationButton;
