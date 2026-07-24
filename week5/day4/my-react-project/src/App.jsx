import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Setting from "./Setting";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/setting">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;