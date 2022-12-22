import { useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const total = Number(response.headers.get("X-Total-Count"));
    setIsLoading(false);
    return { data, total };
  };

  const addData = async (data, totalItems) => {
    const requestParams = {
      method: "POST",
      body: JSON.stringify({ ...data, id: totalItems + 1 }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    setIsLoading(true);
    const response = await fetch(url, requestParams);
    const json = await response.json();
    setIsLoading(false);
    return json;
  };

  return { isLoading, getData, addData };
};
