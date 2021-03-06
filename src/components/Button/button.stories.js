import React from "react";
import Button from ".";

export default {
  title: "UI组件/Button",
  component: Button,
};

export const Default = () => (
  <div>
    <Button size="mini">迷你按钮</Button>
    <Button size="small">小型按钮</Button>
    <Button>默认按钮</Button>
    <Button size="large">大型按钮</Button>
  </div>
);
