import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/fontawesome-free-solid'

export default {
  title: "UI组件/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccccc" />;

export const CustomSize = () => <Icon icon={SmileIcon} width={48} height={48} color="#2797ff" />;

export const FontAwesome = () => <FontAwesomeIcon icon={faCoffee} />

export const FontAwesomeLarge = () => <FontAwesomeIcon icon={faCoffee} style={{"fontSize": "36px", color: "#2979ff"}} />