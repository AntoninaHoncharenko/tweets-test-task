import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 200px;
  background-color: #766a92;
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 70px;
  color: #5cd3a8;
`;

export const LinkToTweets = styled(Link)`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #5cd3a8;
  border-radius: 32px;
  transition: 250ms linear;

  :hover,
  :focus {
    transform: translateY(+5%);
    box-shadow: 0px 11px 42px -2px rgba(66, 68, 90, 1);
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-right: 8px;
`;
