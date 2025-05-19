import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router";

const Index = ({ isFalse, setIsfalse, setBurger, setBurgers }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleclikHome = () => {
    navigate("/");
    if (window.innerWidth < 640) {
      setBurger(false);
      setBurgers(false);
    }
  };
  const handleclikDashboard = () => {
    navigate("/pumma");
    if (window.innerWidth < 640) {
      setBurger(false);
      setBurgers(false);
    }
  };
  const handleclikMembers = () => {
    navigate("/");
    if (window.innerWidth < 640) {
      setBurger(false);
      setBurgers(false);
    }
  };
  return (
    <div className="overflow-y-hidden overflow-x-hidden text-xs font-medium w-full flex justify-between items-center">
  {/* Bagian kiri */}
  <div className="flex items-center space-x-3">
    {/* Logo mainhero */}
    <img
      src="/mainhero.svg"
      alt="Main Hero"
      className="h-10 sm:h-16 w-auto ml-4 pt-2"
    />

    {/* Icon Hamburger untuk mobile */}
    <div className="sm:hidden">
      <GiHamburgerMenu
        onClick={() => {
          setBurger(true);
          setBurgers(true);
        }}
        className="text-lg"
      />
    </div>
  </div>

  {/* Bagian kanan - Menu navigasi */}
  <div className="h-12 flex items-center justify-between px-4 text-black text-sm font-bold">
    <div className="px-1">
      <div onClick={handleclikHome} className="py-3">
        <h1
          className={`text-sm font-bold ${
            pathname === "/"
              ? "text-white bg-[#2E3192] rounded-lg py-1 px-3"
              : "text-black py-1 px-3"
          } ${isFalse === true ? "scale-0 hidden" : "scale-100"}`}
        >
          Home
        </h1>
      </div>
    </div>
    <div className="px-1">
      <div onClick={handleclikDashboard} className="py-3">
        <h1
          className={`text-sm font-bold ${
            [
              "/pumma",
              "/pumma-gebang",
              "/pumma-canti",
              "/pumma-panjang",
              "/pumma-marina",
              "/pumma-pangandaran",
              "/pumma-psebesi",
              "/climatologi",
              "/climatologi-canti",
              "/ubuoy",
              "/ubuoy-001",
            ].includes(pathname)
              ? "text-white bg-[#2E3192] rounded-lg py-1 px-3"
              : "text-black py-1 px-3"
          } ${isFalse === true ? "scale-0 hidden" : "scale-100"}`}
        >
          Dashboard
        </h1>
      </div>
    </div>
    <div className="px-1">
      <div className="py-1 px-3" onClick={handleclikMembers}>
        <h1>Members</h1>
      </div>
    </div>
  </div>
</div>

  );
};

export default Index;
