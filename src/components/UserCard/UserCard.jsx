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
  const { id, avatar, tweets, followers, isFollow } = userData;

  const changeFollow = (id) => {
    if (!isFollow) {
      changeFollowing(id, true, "plus");
    } else {
      changeFollowing(id, false, "minus");
    }
  };

  const updatedFollowersNumber = followers
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
          isFollow={isFollow}
        >
          {isFollow ? "Following" : "Follow"}
        </Button>
      </Wrap>
    </UserItem>
  );
};
