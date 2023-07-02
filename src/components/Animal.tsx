interface AnimalProps {
  type: string;
  name: string;
  age: number;
  id: number;
}

export const Animal = ({ type, name, age, id }: AnimalProps) => {
  return (
    <li key={id}>
      <strong>{type}</strong> {name} ({age} years old)
    </li>
  );
};
