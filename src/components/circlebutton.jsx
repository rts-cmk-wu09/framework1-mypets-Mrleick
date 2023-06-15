import styled from "styled-components";

const Circlebutton = styled.div`
  border-radius: 50%;
  background: #f5f5f9;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  width: ${(props) => props.Width};
  height: ${(props) => props.Height};
  margin: ${(props) => props.Margin};
`;

const MyCircleButton = (props) => {
  return <Circlebutton Width={props.Width} Height={props.Height} Margin={props.Margin} />;
};

export default MyCircleButton;
