import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

import { Header } from "./Header";
import { Loader } from "./Loader";
import { List } from "./List";
import { Modal } from "./Modal";

export const App = () => {
  const [data, setData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  const [totalItems, setTotalItems] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const url = "http://localhost:3000/users";

  const { isLoading, getData } = useFetch(url);

  useEffect(() => {
    async function fetchData() {
      const json = await getData(currentPage, itemsPerPage);
      setData(json);
    }
    fetchData();
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
      {/* <Modal
        isOpened={isModalOpened}
        setIsOpened={setIsModalOpened}
        totalItems={totalItems}
        addData={addData}
      /> */}
    </div>
  );
};
