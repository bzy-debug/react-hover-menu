import { useRef } from "react";

function App() {
  const delayTimer = useRef(null);
  const menuRef = useRef(null);

  function openMenu() {
    clearTimeout(delayTimer.current);
    menuRef.current.style.opacity = 1;
    menuRef.current.style.display = "block";
  }

  function closeMenu() {
    menuRef.current.style.opacity = 0;
    delayTimer.current = setTimeout(
      () => (menuRef.current.style.display = "none"),
      150,
    );
  }

  function toggleMenu() {
    if (menuRef.current.style.opacity === "0") {
      openMenu();
    } else {
      closeMenu();
    }
  }

  return (
    <div className="flex justify-between">
      {[1, 2, 3].map((i) => {
        return <div key={i}>{i}</div>;
      })}
      <div className="relative">
        <button
          className="text-3xl font-bold underline"
          onMouseEnter={() => {
            openMenu();
          }}
          onMouseLeave={() => {
            closeMenu();
          }}
          onClick={() => {
            toggleMenu();
          }}
        >
          Hello
        </button>
        <menu
          ref={menuRef}
          className={`absolute right-0 top-full hidden w-max rounded-xl border p-3 opacity-0 shadow-menu transition-opacity`}
          onMouseEnter={() => {
            openMenu();
          }}
          onMouseLeave={() => {
            closeMenu();
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
