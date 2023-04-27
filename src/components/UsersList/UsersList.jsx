import { useState, useEffect } from "react";
import { fetchUsers } from "../../api";
import { UserCard } from "../UserCard/UserCard";
import { UserList } from "./UsersList.styled";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetchUsers(page);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [page]);

  const onLoadMore = async () => {
    setPage((prevState) => prevState + 1);
    try {
      const data = await fetchUsers(page);
      setUsers((prevState) => [...prevState, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <UserList>
        {users &&
          users.map((user) => {
            return <UserCard key={user.id} userData={user} />;
          })}
      </UserList>
      {page < 4 && (
        <button type="button" onClick={onLoadMore}>
          load more
        </button>
      )}
    </div>
  );
};
