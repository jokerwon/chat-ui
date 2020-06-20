import React from "react";
import Avatar from ".";
import avatar from "../../assets/images/avatar.jpg";
import "../../story.css";

export default {
  title: "UI组件/Avatar",
  compomemt: Avatar,
};

export const Default = () => {
  return <Avatar src={avatar}></Avatar>;
};

export const Sizes = () => {
  return (
    <div className="row-elements">
      <Avatar src={avatar} size="48px"></Avatar>
      <Avatar src={avatar} size="56px"></Avatar>
      <Avatar src={avatar} size="64px"></Avatar>
      <Avatar src={avatar} size="72px"></Avatar>
    </div>
  );
};
Sizes.story = {
  name: "不同尺寸"
};

export const WithStatus = () => {
  return (
    <div className="row-elements">
      <Avatar src={avatar}></Avatar>
      <Avatar src={avatar} status="online"></Avatar>
      <Avatar src={avatar} status="offline"></Avatar>
      <Avatar
        src={avatar}
        status="offline"
        size="72px"
        StatusIconSize="12px"
      ></Avatar>
    </div>
  );
};
WithStatus.story = {
  name: "不同(尺寸)状态图标"
};
