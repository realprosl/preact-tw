import { IconsSearch, IconsDelete } from "./icons";

type Props = {
  size?: string;
  placeholder?: string;
};

export const RealSearch = (props: Props) => {
  return (
    <div className={`w-[${props.size || "90%"}]`}>
      <div className="overflow-hidden relative h-[32px] min-w-44 rounded-xl shadow-md has-[:hover]:shadow-slate-400">
        <input
          className="absolute bg-transparent top-[4px] left-9 rounded-md peer outline-none w-[96%]"
          type="text"
          placeholder={props.placeholder}
        />
        <div className="absolute top-0 -z-10 h-[32px] border w-[100%] border-gray-400 peer-hover:border-none shadow-sm rounded-xl"></div>
        <div className="absolute left-1 top-[4px]  rounded-xl bg-black w-6 h-6 peer-focus:animate-duration-200 peer-focus:animate-fade-out-up"></div>
        <IconsSearch
          color="white"
          className="absolute top-[4px] stroke-white left-1 rounded-xl opacity-0 bg-blue-600 w-6 h-6 peer-focus:animate-fade-in-up"
        />
        <IconsDelete
          onClick={clear}
          className="absolute right-2 top-[11px] bg-gray-300 rounded-xl w-3 h-3 transition-opacity opacity-0 hover:opacity-100 hover:bg-gray-500 hover:fill-white peer-hover:opacity-100"
        />
      </div>
    </div>
  );
};

function clear(e: MouseEvent): void {
  const text = (e.target as HTMLElement).parentNode?.parentNode?.querySelector(
    "input"
  );
  if (text != null) text.value = "";
}
