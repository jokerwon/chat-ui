import React from "react";
import PropTypes from "prop-types";
import StyledBadge, { Count } from "./style";

function Badge({
  children,
  show = false,
  count = 0,
  showZero = false,
  ...rest
}) {
  // variant表示组件变体，如果插入自组件，则以小红点方式显示，否则使用数字徽标
  return (
    <StyledBadge
      variant={children ? "dot" : "default"}
      show={show}
      count={count}
      showZero={showZero}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

Badge.propTypes = {
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  children: PropTypes.any,
};

export default Badge;
