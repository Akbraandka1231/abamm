import React from "react";
import { useState } from "react";
import { BasePumma2 } from "../..";

const Index = () => {
  const [dataGrafik, setDataGrafik] = useState({
    name: "terbaru",
    link: 1/4,
    description: "waterlevel",
  });
  return (
    <div>
      <BasePumma2
        dataTable={"canti/count/10"}
        datagrafik={"pumma/canti/update"}
        dataimg={"canti/image"}
        datarealtime={"pumma/canti"}
        maps={
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3969.3831111671125!2d105.58133931464452!3d-5.801444658846909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDgnMDUuMiJTIDEwNcKwMzUnMDAuNyJF!5e0!3m2!1sid!2sid!4v1679665105055!5m2!1sid!2sid"
        }
        dataGrafik={dataGrafik}
        setDataGrafik={setDataGrafik}
        location={"canti"}
      />
    </div>
  );
};

export default Index;
