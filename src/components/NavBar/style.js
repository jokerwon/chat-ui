import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "utils/mixins";
import StyledAvatar, { StatusIcon } from "components/Avatar/style";

const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;

  /* 为StyledAvatar组件修改样式,只能选择 styledComponent */
  ${StyledAvatar} {
    justify-self: center;
    /* 为 StatusIcon 组件修改样式 */
    ${StatusIcon} {
      &::before {
        background-color: ${({theme}) => theme.darkPurple};
      }
    }
  }
`;

const StyledMenuItem = styled.div`
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 74px;
    ${activeBar()};
    ${({ active }) => (active ? "" : `&::before, &::after { height: 0 }`)}
  }
`;

const StyledMenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

const StyledMenuIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
`;

export default StyledNavBar;

export { StyledMenuItem, StyledMenuIcon, StyledMenuItems };
