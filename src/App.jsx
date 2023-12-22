import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lazyDropAnimations = document.querySelectorAll(
      ".lazy-drop-animation"
    );

    lazyDropAnimations.forEach((element, index) => {
      element.style.animationDelay = index * 0.5 + "s";
    });
  }, []);

  return (
    <main className="max-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
