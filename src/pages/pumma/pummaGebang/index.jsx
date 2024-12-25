import React from "react";
import { useState } from "react";
import { BasePumma1 } from "../..";

const Index = () => {
  const [dataGrafik, setDataGrafik] = useState({
    name: "terbaru",
    link: 1/4,
    description: "waterlevel"
  });
  return (
    <div>
      <BasePumma1
        dataTable={"petengoran/count/10"}
        datagrafik100={"pumma/petengoran/update"}
        dataimg={"petengoran/image"}
        datarealtime={"pumma/petengoran"}
        maps={
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3971.000302411199!2d105.23471632337122!3d-5.566969643909641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzQnMDEuMSJTIDEwNcKwMTQnMjEuMSJF!5e0!3m2!1sid!2sid!4v1679587005668!5m2!1sid!2sid"
        }
        dataGrafik={dataGrafik}
        setDataGrafik={setDataGrafik}
        location={"petengoran"}
      />
    </div>
  );
};

export default Index;
