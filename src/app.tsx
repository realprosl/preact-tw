import { Signal, signal } from "@preact/signals";

const count = signal(0);

export function App() {
  return (
    <div className="flex flex-col">
      <span className={isNegative(count)}>{count}</span>
      <div className="flex flex-row space-x-2">
        <button onClick={() => count.value++}>add</button>
        <button onClick={() => count.value--}>minus</button>
      </div>
    </div>
  );
}

function isNegative(count: Signal<number>): string {
  return count.value < 0 ? "text-red-400" : "text-green-400";
}
