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

export const UserCard = ({ userData, changeFollowing }) => {
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
      changeFollowing(id, true);
    } else {
      setFollowersNumber((prevState) => {
        localStorage.setItem(`followers ${id}`, prevState - 1);
        return prevState - 1;
      });
      changeFollowing(id, false);
    }

    setIsFollowing((prevState) => {
      localStorage.setItem(`isFollowing ${id}`, !prevState);
      return !prevState;
    });
  };

  const updatedFollowersNumber = followersNumber
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <UserItem>
      <Wrap>
        <ImageWrap>
          <Image src={avatar} alt="avatar" />
        </ImageWrap>
        <TextWrap>
          <Text>{tweets} tweets</Text>
          <Text>{updatedFollowersNumber} followers</Text>
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
