import { UsersList } from "../../components/UsersList/UsersList";
import { BsBoxArrowLeft } from "react-icons/bs";
import { Section, LinkToHome, Text } from "./TweetsPage.styled";

export const TweetsPage = () => {
  return (
    <Section>
      <LinkToHome to="/home">
        <BsBoxArrowLeft size="26" />
        <Text>Back to Home</Text>
      </LinkToHome>
      <UsersList />
    </Section>
  );
};
