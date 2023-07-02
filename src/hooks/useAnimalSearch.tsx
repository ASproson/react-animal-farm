import { useEffect, useState } from "react";

export const useAnimalSearch = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    if (lastQuery) {
      search(lastQuery);
    }
  }, []);

  const search = async (q: string) => {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );

    const data = await response.json();
    setAnimals(data);

    localStorage.setItem("lastQuery", q);
  };

  return { search, animals };
};
