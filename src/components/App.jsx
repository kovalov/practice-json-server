import { useState, useEffect } from "react";

import { useFetch } from "../hooks/useFetch";

import { Header } from "./Header";
import { Loader } from "./Loader";
import { List } from "./List";
import { Modal } from "./Modal";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [totalItems, setTotalItems] = useState(0);
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const [users, setUsers] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const baseUrl = "http://localhost:3000/users";
  const urlQuery = `?_page=${currentPage}&_limit=${itemsPerPage}`;
  const url = `${baseUrl}${urlQuery}`;

  const { isLoading, addData, getData } = useFetch(url);

  useEffect(() => {
    async function getUsers() {
      const { data, total } = await getData();
      setTotalItems(total);
      setUsers(data);
    }

    getUsers();
  }, [currentPage, isModalOpened]);

  return (
    <div className="App">
      <Header title="User list" setIsModalOpened={setIsModalOpened} />
      {isLoading ? (
        <Loader />
      ) : (
        <List
          users={users}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      <Modal
        addData={addData}
        totalItems={totalItems}
        isOpened={isModalOpened}
        setIsOpened={setIsModalOpened}
      />
    </div>
  );
};
