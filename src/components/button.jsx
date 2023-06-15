import styled from "styled-components";

const Button = styled.button`
  background: #57419d;
  width: 327px;
  height: 44px;
  border-radius: 37px;
  margin: ${(props) => props.Margin};
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const MyButton = () => {
  return <Button Margin="0 24px">Skip</Button>;
};

export default MyButton;
