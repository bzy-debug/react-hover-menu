import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const animation = open ? "opacity-100 visible" : "opacity-0 invisible";
  return (
    <div className="flex justify-between">
      {[1, 2, 3].map((i) => {
        return <div key={i}>{i}</div>;
      })}
      <div className="relative">
        <button
          className="text-3xl font-bold underline"
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Hello
        </button>
        <menu
          className={`absolute  right-0 top-full w-max rounded-xl border p-3 shadow-menu transition-all duration-1000 ${animation}`}
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <li className="px-3 text-center">Vite 3 Docs</li>
          <li className="px-3 text-center">Vite 2 Docs</li>
        </menu>
      </div>
      {[1, 2, 3].map((i) => {
        return <div key={i}>{i}</div>;
      })}
    </div>
  );
}

export default App;
