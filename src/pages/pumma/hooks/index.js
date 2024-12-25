import React from "react";

const index = () => {
  const dataPumma = [
    {
      name: "petengoran",
      datarealtime: "pumma/petengoran",
      datagrafik: "pumma/update",
      dataTable: "petengoran/count/10",
      dataImage: "petengoran/image",
    },
    {
      name: "panjang",
      datarealtime: "pumma/panjang",
      datagrafik: "pumma/panjang/update",
      dataTable: "panjang/count/10",
      dataImage: "panjang/image",
    },
  ];

  return {dataPumma}
};

export default index;
