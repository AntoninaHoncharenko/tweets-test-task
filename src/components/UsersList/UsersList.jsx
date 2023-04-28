import { UserCard } from "../UserCard/UserCard";
import { UserList } from "./UsersList.styled";

export const UsersList = ({ users, changeFollowing }) => {
  return (
    <>
      <UserList>
        {users &&
          users.map((user) => {
            return (
              <UserCard
                key={user.id}
                userData={user}
                changeFollowing={changeFollowing}
              />
            );
          })}
      </UserList>
    </>
  );
};
