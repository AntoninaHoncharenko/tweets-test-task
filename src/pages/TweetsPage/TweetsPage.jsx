import { useState, useEffect } from "react";
import { fetchUsers } from "../../api";
import { UsersList } from "../../components/UsersList/UsersList";
import { Filter } from "../../components/Filter/Filter";
import { BsBoxArrowLeft } from "react-icons/bs";
import {
  Section,
  LinkToHome,
  Text,
  Button,
  ErrorText,
} from "./TweetsPage.styled";

export const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page")) || 1
  );
  // const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetchUsers(1);
        const updatedUsers = data.map((user) => ({
          ...user,
          following: user.following ? user.following : false,
        }));
        // setUsers(updatedUsers);
        // localStorage.setItem("users", JSON.stringify(updatedUsers));
        // не важливо
        const localStorageUsers = JSON.parse(localStorage.getItem("users"));
        if (localStorageUsers) {
          setUsers(localStorageUsers);
        } else {
          setUsers(updatedUsers);
          localStorage.setItem("users", JSON.stringify(updatedUsers));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  console.log(page);

  const onLoadMore = async () => {
    try {
      const data = await fetchUsers(page + 1);
      const updatedUsers = data.map((user) => ({
        ...user,
        following: user.following ? user.following : false,
      }));
      setUsers((prevState) => [...prevState, ...updatedUsers]);
      localStorage.setItem(
        "users",
        JSON.stringify([...users, ...updatedUsers])
      );
      setPage((prevState) => prevState + 1);
      localStorage.setItem("page", JSON.stringify(page + 1));
    } catch (error) {
      console.log(error);
    }
  };

  const changeFilter = (event) => {
    setFilterValue(event.target.value);
  };

  // const changeFollowing = (id, value) => {
  //   setUsers((prevState) =>
  //     prevState.map((user) =>
  //       user.id === id ? { ...user, following: value } : user
  //     )
  //   );
  // };
  // не важливо

  const changeFollowing = (id, value) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, following: value };
      } else {
        return user;
      }
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((user) => {
    if (filterValue === "all") {
      return user;
    } else if (filterValue === "follow") {
      return user.following === false;
    } else if (filterValue === "following") {
      return user.following === true;
    }
  });

  return (
    <Section>
      <LinkToHome to="/home">
        <BsBoxArrowLeft size="26" />
        <Text>Back to Home</Text>
      </LinkToHome>
      <Filter changeFilter={changeFilter} />
      <UsersList users={filteredUsers} changeFollowing={changeFollowing} />
      {filteredUsers.length < 1 && filterValue === "follow" && (
        <ErrorText>No users to follow</ErrorText>
      )}
      {filteredUsers.length < 1 && filterValue === "following" && (
        <ErrorText>No following users</ErrorText>
      )}
      {filterValue === "all" && page < 4 && users.length < 12 && (
        <Button type="button" onClick={onLoadMore}>
          load more
        </Button>
      )}
    </Section>
  );
};
