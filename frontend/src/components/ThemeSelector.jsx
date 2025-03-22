import { useEffect, useState } from "react";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const ThemeSelector = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} className="btn btn-outline">
        Select Theme
      </button>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box max-h-60 overflow-y-auto w-52">
        {themes.map((t) => (
          <li key={t}>
            <button onClick={() => setTheme(t)} className="capitalize">
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
