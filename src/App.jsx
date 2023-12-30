import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

function App() {
  useEffect(() => {
    const lazyDropAnimations = document.querySelectorAll(
      ".lazy-drop-animation"
    );

    lazyDropAnimations.forEach((element, index) => {
      element.style.animationDelay = index * 0.5 + "s";
    });
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "918384015480";
    const url = `https://wa.me/${phoneNumber}`;

    window.open(url, "_blank");
  };

  const openPhoneDialer = () => {
    const phoneNumber = "918384015480";
    const url = `tel:${phoneNumber}`;

    window.open(url, "_blank");
  };

  return (
    <main className="max-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />

      <div
        className="fixed bottom-24 right-8 bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-600"
        onClick={openPhoneDialer}
      >
        <AiOutlinePhone className="text-white text-3xl" />
      </div>

      <div
        className="fixed bottom-8 right-8 bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600"
        onClick={openWhatsApp}
      >
        <AiOutlineWhatsApp className="text-white text-3xl" />
      </div>
    </main>
  );
}

export default App;
