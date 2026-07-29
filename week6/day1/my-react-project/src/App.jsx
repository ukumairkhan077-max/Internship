import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./Navbar";
import ContactForm from "./contact";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar />
      <ContactForm />
    </>
  );
}

export default App;