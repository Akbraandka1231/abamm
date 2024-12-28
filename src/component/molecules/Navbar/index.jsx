
import { GiHamburgerMenu } from "react-icons/gi";

const Index = ({ isFalse, setIsfalse, setBurger, setBurgers }) => {

  

 

  return (
    <div className="overflow-y-hidden overflow-x-hidden text-xs font-medium w-full flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className=" sm:hidden">
          <GiHamburgerMenu
            onClick={() => {
              setBurger(true);
              setBurgers(true);
            }}
            className="text-lg"
          />
        </div>
      </div>
      <div className="flex space-x-6 items-center">
        <div className="flex space-x-5">
          <div className="">
            <h1>PUMMA Information</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
