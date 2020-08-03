import React from "react";
import NavBar, { MenuItem } from ".";
import { faCommentDots } from "@fortawesome/fontawesome-free-solid";
import "styled-components/macro";

export default {
  title: "页面组件/NavBar",
  component: NavBar,
};

export const Default = () => <NavBar>默认</NavBar>;

export const Menu = () => {
  return (
    <div
      css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width: 100px;
      `}
    >
      <MenuItem showBadge active icon={faCommentDots}></MenuItem>
    </div>
  );
};
