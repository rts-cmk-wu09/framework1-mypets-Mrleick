import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;
const Header = (props) => {
  return (
    <StyledHeader color={props.color} fontSize={props.fontSize} fontWeight={props.fontWeight}>
      {props.title}
    </StyledHeader>
  );
};

export default Header;
