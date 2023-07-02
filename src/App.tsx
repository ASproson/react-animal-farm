import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [animals, setAnimals] = useState([]);

  const search = async (q: string) => {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );

    const data = await response.json();
    setAnimals(data);
  };

  return (
    <main>
      <h1>Animal Farm</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => search(e.target.value)}
      />
      <ul>
        {animals.length === 0 && "No animals found"}

        {animals.map((animal) => (
          <Animal key={animal.id} {...animal} />
        ))}
      </ul>
    </main>
  );
}

export default App;

interface AnimalProps {
  type: string;
  name: string;
  age: number;
}

export const Animal = ({ type, name, age }: AnimalProps) => {
  return (
    <li>
      <strong>{type}</strong> {name} ({age} years old)
    </li>
  );
};
