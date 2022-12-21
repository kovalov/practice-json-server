import { useState, useEffect } from "react";

import { Header } from "./Header";
import { Loader } from "./Loader";
import { List } from "./List";
import { Modal } from "./Modal";

export const App = () => {
  const baseUrl = "http://localhost:3000/users";
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [totalItems, setTotalItems] = useState(0);
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const urlQuery = `?_page=${currentPage}&_limit=${itemsPerPage}`;
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const apiUrl = `${baseUrl}${urlQuery}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => {
        setTotalItems(response.headers.get("X-Total-Count"));
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, [currentPage]);

  const getData = () => {
    fetch(apiUrl)
      .then((response) => {
        setTotalItems(+response.headers.get("X-Total-Count"));
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  };

  const addData = (data) => {
    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify({ id: totalItems + 1, ...data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

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
        getData={getData}
        isOpened={isModalOpened}
        setIsOpened={setIsModalOpened}
      />
    </div>
  );
};
