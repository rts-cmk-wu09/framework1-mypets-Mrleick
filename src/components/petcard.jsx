import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 327px;
  height: 130px;
  margin-bottom:27px;
  background: #f5f5fa;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 16px;
`;

const PetCard = () => {
  return <Card></Card>;
};

export default PetCard;
