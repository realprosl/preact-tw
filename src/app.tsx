import { TextField } from "./components/textfield";

export function App() {
  return (
    <>
      <div className="animate-fade-in flex flex-col gap-2 mt-2 ml-2">
        <TextField label="Name" />
        <TextField label="SubName" />
      </div>
    </>
  );
}
