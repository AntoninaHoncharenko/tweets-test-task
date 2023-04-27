import { useState, useEffect } from "react";
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
  const { id, avatar, tweets, followers } = userData;

  const [followersNumber, setFollowersNumber] = useState(
    JSON.parse(localStorage.getItem(`followers ${id}`)) || followers
  );
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`isFollowing ${id}`)) || false
  );

  const changeFollow = (id) => {
    if (!isFollowing) {
      setFollowersNumber((prevState) => {
        localStorage.setItem(`followers ${id}`, prevState + 1);
        return prevState + 1;
      });
    } else {
      setFollowersNumber((prevState) => {
        localStorage.setItem(`followers ${id}`, prevState - 1);
        return prevState - 1;
      });
    }

    setIsFollowing((prevState) => {
      localStorage.setItem(`isFollowing ${id}`, !prevState);
      return !prevState;
    });
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
        <Button
          type="button"
          onClick={() => changeFollow(id)}
          isFollowing={isFollowing}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </Wrap>
    </UserItem>
  );
};
