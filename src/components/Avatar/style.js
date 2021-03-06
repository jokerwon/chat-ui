import styled, {css} from "styled-components";
import { circle } from "utils/mixins";

const circleMixinFun = (color, size = "8px") => css`
  content: "";
  position: absolute;
  display: block;
  ${circle(color, size)}
`;

const StyledAvatar = styled.div`
  position: relative;
`;
const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${({size}) => circleMixinFun("white")}
    transform: scale(2)
  }
  &::after {
    ${({theme, status, size}) => {
      if(status === "online") {
        return circleMixinFun(theme.green, size);
      } else if(status === "offline") {
        return circleMixinFun(theme.gray, size)
      }
    }}
  }
`;
// 头像蒙板
const AvatarClip = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 50%;
  overflow: hidden;
`;
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default StyledAvatar;

export { StatusIcon, AvatarClip, AvatarImage };
