import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";

export default {
  title: "UI组件/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccccc" />;

export const CustomSize = () => <Icon icon={SmileIcon} width={48} height={48} color="#2797ff" />;
