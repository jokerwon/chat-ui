import React from "react";
import StyledNavBar, { StyledMenuItem, StyledMenuIcon, StyledMenuItems } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";
import profileImg from 'assets/images/avatar.jpg';
import { faComment, faUsers, faFolder, faStickyNote, faEllipsisH, faCog } from "@fortawesome/fontawesome-free-solid";

import "styled-components/macro";

function NavBar({ ...rest }) {
  return <StyledNavBar {...rest}>
      <Avatar src={profileImg} status="online" />
      <StyledMenuItems>
        <MenuItem active showBadge icon={faComment}></MenuItem>
        <MenuItem icon={faUsers}></MenuItem>
        <MenuItem icon={faFolder}></MenuItem>
        <MenuItem icon={faStickyNote}></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem icon={faCog} css={`align-self: end;`}></MenuItem>
      </StyledMenuItems>
    </StyledNavBar>;
}

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <StyledMenuIcon active={active} icon={icon}></StyledMenuIcon>
        </Badge>
      </a>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
