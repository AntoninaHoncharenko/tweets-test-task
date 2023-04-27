import styled from "styled-components";

export const UserList = styled.ul`
  @media screen and (min-width: 1200px) {
    width: 1180px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto 30px;
  }
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
