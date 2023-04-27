import { BsBoxArrowInRight } from "react-icons/bs";
import { Wrap, Title, LinkToTweets, Text } from "./HomePage.styled";

export const HomePage = () => {
  return (
    <Wrap>
      <Title>Wellcome to Twitter</Title>
      <LinkToTweets to="/tweets">
        <Text>Go to users and tweets</Text>
        <BsBoxArrowInRight size="26" />
      </LinkToTweets>
    </Wrap>
  );
};
