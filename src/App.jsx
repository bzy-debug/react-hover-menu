import { useRef } from "react";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState("");
  const delayTimer = useRef(null);
  const display = open ? "block" : "hidden";
  return (
    <div className="flex justify-between">
      {[1, 2, 3].map((i) => {
        return <div key={i}>{i}</div>;
      })}
      <div className="relative">
        <button
          className="text-3xl font-bold underline"
          onMouseEnter={() => {
            clearTimeout(delayTimer.current);
            setOpen(true);
            setFade("animate-fadeIn");
          }}
          onMouseLeave={() => {
            setFade("animate-fadeOut");
            delayTimer.current = setTimeout(() => setOpen(false), 200);
          }}
        >
          Hello
        </button>
        <menu
          className={`absolute right-0 top-full w-max rounded-xl border p-3 shadow-menu ${display} ${fade}`}
          onMouseEnter={() => {
            clearTimeout(delayTimer.current);
            setFade("animate-fadeIn");
            setOpen(true);
          }}
          onMouseLeave={() => {
            setFade("animate-fadeOut");
            delayTimer.current = setTimeout(() => setOpen(false), 200);
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
