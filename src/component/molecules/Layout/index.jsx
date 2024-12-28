import React from "react";
import { useState } from "react";
import {  Navbar, Sidebar } from "..";
import Route from "../../../Route/index"

const Index = () => {
  const [isFalse, setIsfalse] = useState(false);
  const [burger, setBurger] = useState(window.innerWidth < 640 ? false : true);
  const [burgers, setBurgers] = useState(false);

  const showContent = () => {
    if (window.innerWidth < 640) {
      setBurger(false);
      setIsfalse(false);
    } 
    else {
      setBurger(true);
      setBurgers(false);
    }
  };

  window.addEventListener("resize", showContent);

  const handleCloseSidebar = () => {
    if (burgers === true) {
      setBurgers(false);
      setBurger(false);
    }
  };

  return (
    <section className="bg-slate-100 flex items-center overflow-hidden h-screen">
      <div
        className={`bg-slate-100 ${isFalse === false ? "w-3/12 md:w-1/12" : "w-24"}   ${
          burger === false
            ? "absolute -translate-x-[700px] transition ease-in duration-300 bg-white"
            : " translate-x-0 transition ease-out duration-300"
        } ${
          burgers === false
            ? "block transition ease-out duration-300"
            : "absolute bg-white z-10"
        } `}
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
      <div className="w-full h-screen overflow-clip flex flex-col" onClick={handleCloseSidebar}>
        <div className="h-12 px-5 flex items-center">
          <Navbar
            isFalse={isFalse}
            setIsfalse={setIsfalse}
            burger={burger}
            setBurger={setBurger}
            burgers={burgers}
            setBurgers={setBurgers}
          />
        </div>
        <div className="overflow-y-scroll md:p-2 p-5 w-auto h-screen scrollbar-hide bg-slate-100">
          <Route />
        </div>
      </div>
    </section>
  );
};

export default Index;
