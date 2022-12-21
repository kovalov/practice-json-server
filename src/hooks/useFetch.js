import { useState } from "react";

export const useFetch = (baseUrl) => {
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (currentPage, itemsPerPage) => {
    const url = `${baseUrl}?_page=${currentPage}&_limit=${itemsPerPage}`;
    setIsLoading(true);
    const response = await fetch(url);
    const total = Number(response.headers.get("X-Total-Count"));
    const json = await response.json();
    setIsLoading(false);
    return { json, total };
  };

  const addData = async (data) => {
    const requestParams = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };

    setIsLoading(true);
    const response = await fetch(baseUrl, requestParams);
    const json = await response.json();
    setIsLoading(false);
    return json;
  };

  return { isLoading, getData, addData };
};
