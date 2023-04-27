import { useState, useEffect } from "react";
import { fetchUsers } from "../../api";
import { UserCard } from "../UserCard/UserCard";
import { UserList } from "./UsersList.styled";

export const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  console.log(users);

  return (
    <UserList>
      {users &&
        users.map((user) => {
          return <UserCard key={user.id} userData={user} />;
        })}
    </UserList>
  );
};
