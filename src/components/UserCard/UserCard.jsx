import { useState } from "react";
import {
  UserItem,
  Wrap,
  ImageWrap,
  Image,
  TextWrap,
  Text,
  Button,
} from "./UserCard.styled";

export const UserCard = ({ userData }) => {
  const { avatar, tweets, followers } = userData;

  const [followersNumber, setFollowersNumber] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(false);

  const changeFollow = () => {
    if (isFollowing) {
      setFollowersNumber(followersNumber - 1);
    } else {
      setFollowersNumber(followersNumber + 1);
    }

    setIsFollowing(!isFollowing);
  };

  return (
    <UserItem>
      <Wrap>
        <ImageWrap>
          <Image src={avatar} alt="avatar" />
        </ImageWrap>
        <TextWrap>
          <Text>{tweets} tweets</Text>
          <Text>{followersNumber} followers</Text>
        </TextWrap>
        <Button type="button" onClick={changeFollow} isFollowing={isFollowing}>
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </Wrap>
    </UserItem>
  );
};
