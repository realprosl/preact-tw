type Props = {
  className?: string;
  color?: string;
  onClick?: (e: MouseEvent) => void;
};
export const IconsSearch = (props: Props) => (
  <div className={props.className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-[60%] m-1"
      fill="none"
    >
      <path
        className={`stroke-${props.color || "black"}`}
        d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

export const IconsDelete = (props: Props) => (
  <div className={props.className} onClick={props.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
    >
      <path
        d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z"
        fill=""
      />
      <path d="M328 340.8l32-31.2 348 348-32 32z" fill="" />
    </svg>
  </div>
);
