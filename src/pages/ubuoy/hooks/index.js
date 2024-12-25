

const index = () => {
  const dataBuoy = [
    {
      id: "1",
      name: "Ubuoy 001",
      datarealtime: "pumma/petengoran",
      datagrafik: "pumma/update",
      dataTable: "petengoran/count/10",
      dataImage: "petengoran/image",
    },
    {
      id: "2",
      name: "U-buoy 002",
      datarealtime: "pumma/panjang",
      datagrafik: "pumma/panjang/update",
      dataTable: "panjang/count/10",
      dataImage: "panjang/image",
    },
  ];

  return {dataBuoy}
};

export default index;