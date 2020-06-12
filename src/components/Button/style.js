import styled from "styled-components";

const sizeMap = {
  primary: "12px 48px",
  mini: "6px 24px",
  small: "8px 32px",
  large: "16px 64px",
}

const StyledButton = styled.button`
  padding: ${({size}) => sizeMap[size]};
  font-size: 14px;
  background-color: ${({color}) => color};
  color: #ffffff;
  border: 0;
  outline: 0;
  cursor: pointer;
  &:active {
  }
`;

export default StyledButton;