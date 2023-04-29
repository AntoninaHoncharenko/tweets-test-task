import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 30px 30px 60px;
`;

export const LinkToHome = styled(Link)`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 224px;
  margin-bottom: 30px;
  background-color: #ebd8ff;
  border-radius: 32px;
  transition: 250ms linear;

  :hover,
  :focus {
    transform: translateY(+3%);
    box-shadow: inset 0px 0px 29px -16px rgba(253, 253, 253, 1);
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-left: 8px;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 10.3108px;
  background-color: #5cd3a8;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;

  transition: 250ms linear;

  :hover {
    transform: translateY(+3%);
    box-shadow: inset 0px 0px 29px -16px rgba(66, 68, 90, 1);
  }
`;

export const ErrorText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: brown;
  text-align: center;
`;
