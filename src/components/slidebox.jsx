import styled from "styled-components";
import Header from "../components/header";

const StyledSlideBox = styled.div`
  text-align: center;
`;

const StyledSecond = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 16px;
  color: #828282;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 150px;
`;

const SlideBox = () => {
  return (
    <StyledSlideBox>
      <Header
        title="My Pets"
        color="#333333"
        fontSize="20px"
        fontWeight="800"
      />
      <StyledSecond>
        Taking care of a pet is my favorite, it helps me to gain stress and
        fatigue.
      </StyledSecond>
    </StyledSlideBox>
  );
};

export default SlideBox;
