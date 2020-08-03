import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "utils/mixins";

const StyledNavBar = styled.div``;

const StyledMenuItem = styled.div`
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 74px;
    ${activeBar()};
    ${({active}) => active ? "": `&::before, &::after { height: 0 }`}
  }
`;

const StyledMenuIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 24px;
  opacity: ${({active}) => active ? 1 : .3};
`;

export default StyledNavBar;

export { StyledMenuItem, StyledMenuIcon };
