import React from "react";
import { PummaList } from "..";

const Index = () => {
 

  return (
    <div>
      <div>
      </div>
      <div>
        <label
          className=" py-3 text-lg font-bold text-left text-gray-500 capitalize"
          htmlFor=""
        >
          Pumma
        </label>
        <PummaList />
      </div>
      <div>
        <label
          className=" py-3 text-lg font-bold text-left text-gray-500 capitalize"
          htmlFor=""
        >
          Climatologi
        </label>
        <PummaList />
      </div>
      <div>
        <label
          className=" py-3 text-lg font-bold text-left text-gray-500 capitalize"
          htmlFor=""
        >
          UBuoy
        </label>
        <PummaList />
      </div>
    </div>
  );
};

export default Index;




