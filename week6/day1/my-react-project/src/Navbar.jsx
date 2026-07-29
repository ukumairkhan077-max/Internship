import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Contact Form</h2>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;