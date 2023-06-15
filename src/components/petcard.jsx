import React from "react";
import styled from "styled-components";
import dogpic from "../assets/dog.png";
import MyCircleButton from "./circlebutton";

const Card = styled.div`
  width: 327px;
  height: 130px;
  margin-bottom: 27px;
  background: #f5f5fa;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
`;

const PetCard = () => {
  return (
    <Card>
      <img src={dogpic} alt="" />
      <h3></h3>
      <MyCircleButton Width="24px" Height="24px" Margin="12px" />
    </Card>
  );
};

export default PetCard;
