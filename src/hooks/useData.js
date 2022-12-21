import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const useData = (url, currentPage, itemsPerPage) => {
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const { isLoading, getData, addData } = useFetch(url);

  useEffect(() => {
    async function get() {
      const { json, total } = await getData(currentPage, itemsPerPage);
      setData(json);
      setTotalItems(total);
    }
    get();
  }, [currentPage]);

  const add = async (data) => {
    const response = await addData({ id: Number(totalItems) + 1, ...data });
    setData((prevState) => [...prevState, response]);
  };

  return {
    data,
    totalItems,
    add,
    isLoading,
  };
};
