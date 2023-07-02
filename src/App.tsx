import { Animal } from "./components/Animal";
import { useAnimalSearch } from "./hooks/useAnimalSearch";

function App() {
  const { search, animals } = useAnimalSearch();

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

        {animals.map((animal: object) => (
          <Animal {...animal} />
        ))}
      </ul>
    </main>
  );
}

export default App;
