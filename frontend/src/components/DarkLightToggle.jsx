import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const DarkLightToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="text-yellow-400 text-xl transition hover:scale-110 hover:cursor-pointer"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default DarkLightToggle;
