import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  }, [url]);

  const getData = () => {
    const token = localStorage.getItem("token");

    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  };

  return { data, getData };
};
