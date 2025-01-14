import React from "react";
import { Route, Routes } from "react-router";
import { PummaCanti, PummaList, UbuoyList, ClimatologiList} from "../pages";
import { PummaPanjang, PummaGebang, PummaMarina, PummaPangandaran,PummaPSebesi } from "../pages/pumma";
import { ClimatologiCanti } from "../pages/climatologi";
import { Ubuoy001 } from "../pages/ubuoy";
import { Home } from "../pages";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pumma" element={<PummaList />} />
        <Route path="/pumma-canti" element={<PummaCanti />} />
        <Route path="/pumma-gebang" element={<PummaGebang />} />
        <Route path="/pumma-panjang" element={<PummaPanjang />} />
        <Route path="/pumma-marina" element={<PummaMarina />} /> 
        <Route path="/pumma-pangandaran" element={<PummaPangandaran/>} />
        <Route path="/pumma-psebesi" element={<PummaPSebesi/>} />
        <Route path="/climatologi" element={<ClimatologiList/>} />
        <Route path="/climatologi-canti" element={<ClimatologiCanti />} />
        <Route path="/climatologi-gebang" element={<PummaGebang />} />
        <Route path="/climatologi-panjang" element={<PummaPanjang />} />
        <Route path="/ubuoy" element={<UbuoyList/>} />
        <Route path="/ubuoy-001" element={<Ubuoy001/>} />
        <Route path="/ubuoy-002" element={<Ubuoy001/>} />
      </Routes>
    </div>
  );
};

export default Index;
