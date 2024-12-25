import React, { useState } from "react";
import { BasePumma3 } from "../..";

const Index = () => {
  const [dataGrafik, setDataGrafik] = useState({
    name: "terbaru",
    link: 1/4,
    description: "waterlevel",
  });
  return (
    <div>
      <BasePumma3
        dataTable={"panjang/count/10"}
        datagrafik100={"pumma/panjang/update"}
        dataimg={"panjang/image"}
        datarealtime={"pumma/panjang"}
        maps={
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3967.29495989795!2d105.463798!3d-6.09091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDUnMjcuMyJTIDEwNcKwMjcnNDkuNyJF!5e0!3m2!1sid!2sid!4v1690859155548!5m2!1sid!2sid"
        }
        dataGrafik={dataGrafik}
        setDataGrafik={setDataGrafik}
        location={"panjang"}
      />
    </div>
  );
};

export default Index;