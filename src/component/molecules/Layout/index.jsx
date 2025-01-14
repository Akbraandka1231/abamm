import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar, Sidebar } from "..";
import Route from "../../../Route/index";
import { useLocation } from "react-router-dom"; // Import useLocation

const Index = () => {
  const [isFalse, setIsfalse] = useState(false);
  const [burger, setBurger] = useState(window.innerWidth < 640 ? false : true);
  const [burgers, setBurgers] = useState(false);
  const location = useLocation(); // Dapatkan lokasi saat ini

  const showContent = () => {
    if (window.innerWidth < 640) {
      setBurger(false);
      setIsfalse(false);
    } else {
      setBurger(true);
      setBurgers(false);
    }
  };

  const handleCloseSidebar = () => {
    if (burgers === true) {
      setBurgers(false);
      setBurger(false);
    }
  };

  // Tentukan apakah sidebar perlu disembunyikan
  const shouldHideSidebar = ["/"].includes(location.pathname); // Ganti "/home" dengan rute yang sesuai

  useEffect(() => {
    showContent();
  }, [location.pathname]);

  window.addEventListener("resize", showContent);

  return (
    <section className="bg-slate-100 flex items-center overflow-hidden h-screen">
      {/* Tampilkan sidebar hanya jika rute tidak termasuk di shouldHideSidebar */}
      {!shouldHideSidebar && (
        <div
          className={`bg-slate-100 ${
            isFalse === false ? "w-3/12 md:w-1/12" : "w-24"
          } ${
            burger === false
              ? "absolute -translate-x-[700px] transition ease-in duration-300 bg-white"
              : "translate-x-0 transition ease-out duration-300"
          } ${
            burgers === false
              ? "block transition ease-out duration-300"
              : "absolute bg-white z-10"
          }`}
        >
          <Sidebar
            isFalse={isFalse}
            setIsfalse={setIsfalse}
            burger={burger}
            setBurger={setBurger}
            burgers={burgers}
            setBurgers={setBurgers}
          />
        </div>
      )}

      {/* Konten */}
      <div
        className="w-full h-screen overflow-clip flex flex-col"
        onClick={handleCloseSidebar}
      >
        <div className="w-full h-12 flex items-center px-4">
          <Navbar
            isFalse={isFalse}
            setIsfalse={setIsfalse}
            burger={burger}
            setBurger={setBurger}
            burgers={burgers}
            setBurgers={setBurgers}
          />
        </div>
        <div className="overflow-y-scroll w-full h-screen scrollbar-hide bg-slate-100 p-4">
          <Route />
        </div>
      </div>
    </section>
  );
};

export default Index;
