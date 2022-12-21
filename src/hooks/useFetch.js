import { useState } from "react";

export const useFetch = (baseUrl) => {
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (currentPage, itemsPerPage) => {
    const url = `${baseUrl}?_page=${currentPage}&_limit=${itemsPerPage}`;
    setIsLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setIsLoading(false);
    return json;
  };

  //   const getAllData = async () => {
  //     setIsLoading(true);
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setIsLoading(false);
  //     return json;
  //   };

  //   const addData = async (data) => {
  //     const requestParams = {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     };

  //     setIsLoading(true);
  //     const response = await fetch(url, requestParams);
  //     await response.json();
  //     setIsLoading(false);
  //   };

  return { isLoading, getData };
};
