import styled from "styled-components";
import backgroundImage from "../../assets/picture.png";
import logo from "../../assets/logo.png";

export const UserItem = styled.li`
  width: 380px;
  height: 460px;
  background: url(${backgroundImage}) 36px 28px, url(${logo}) 20px 20px,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
  padding-top: 284px;
`;

export const Wrap = styled.div`
  :after {
    content: "";
    width: 380px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    position: absolute;
    left: 0px;
    top: 214px;
  }
`;

export const ImageWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const Image = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextWrap = styled.div`
  margin-bottom: 26px;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;

  :first-child {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  display: block;
  margin: 0 auto;
  background: ${(props) => (props.isFollow ? "#5CD3A8" : "#EBD8FF")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;

  transition: 250ms linear;

  :hover {
    transform: translateY(+3%);
    box-shadow: 0px 11px 42px -2px rgba(66, 68, 90, 1);
  }
`;
