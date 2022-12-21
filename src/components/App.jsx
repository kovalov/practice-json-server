import { useState, useEffect } from "react";

import { Header } from "./Header";
import { Loader } from "./Loader";
import { List } from "./List";
import { Modal } from "./Modal";

export const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [totalItems, setTotalItems] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  const [isModalOpened, setIsModalOpened] = useState(true);

  const url = `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${itemsPerPage}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <div className="App">
      <Header title="User list" setIsModalOpened={setIsModalOpened} />
      {isLoading ? (
        <Loader />
      ) : (
        <List
          data={data}
          numberOfPages={numberOfPages}
          totalItems={totalItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      <Modal isOpened={isModalOpened} setIsOpened={setIsModalOpened} />
    </div>
  );
};
