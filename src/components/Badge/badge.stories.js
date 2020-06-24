import React from "react";
import Badge from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/fontawesome-free-solid";

export default {
  title: "UI组件/Badge",
  component: Badge
};

export const Default = () => <Badge count={5} />;

export const DotVariant = () => <Badge show variant="dot">
  <FontAwesomeIcon icon={faCoffee} style={{"fontSize": "36px", color: "#2979ff"}} />
</Badge>;