import { TextField } from "./components/textfield";
import { RealSearch } from "./components/realSearch";

export function App() {
  return (
    <>
      <div className="flex flex-col gap-2 mt-2 ml-2">
        <TextField label="Name" />
        <TextField label="SubName" />
        <RealSearch size="96%" placeholder="Search here..." />
      </div>
    </>
  );
}
