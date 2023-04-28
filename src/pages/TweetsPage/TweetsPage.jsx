import { useState, useEffect } from "react";
import { fetchUsers } from "../../api";
import { UsersList } from "../../components/UsersList/UsersList";
import { Filter } from "../../components/Filter/Filter";
import { BsBoxArrowLeft } from "react-icons/bs";
import { Section, LinkToHome, Text, Button } from "./TweetsPage.styled";

export const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetchUsers(page);
        const updatedUsers = data.map((user) => ({
          ...user,
          following: "follow",
        }));
        setUsers(updatedUsers);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [page]);

  console.log(users);

  const onLoadMore = async () => {
    setPage((prevState) => prevState + 1);
    try {
      const data = await fetchUsers(page);
      setUsers((prevState) => [...prevState, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const changeFilter = (event) => {
    setFilterValue(event.target.value);
  };

  const changeFollowing = (id, value) => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, following: value } : user
      )
    );
  };

  const filteredUsers = users.filter((user) => {
    if (filterValue === "all") {
      return user;
    } else if (filterValue === "follow") {
      return user.following === "follow";
    } else if (filterValue === "following") {
      return user.following === "following";
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
      {((filterValue === "all" && page < 4) ||
        (filterValue !== "all" && filteredUsers.length > 3 && page < 4)) && (
        <Button type="button" onClick={onLoadMore}>
          load more
        </Button>
      )}
    </Section>
  );
};
