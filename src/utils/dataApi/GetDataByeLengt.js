import axios from "axios";
import { useEffect, useState } from "react";

const GetDataByeLengt = (location, dataGrafik) => {
  const [data, setData] = useState();

  
  const fetchData = async () => { 
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/${location}/interval/?time=${dataGrafik.link}%20day`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => { 
    setData(null);
    fetchData();
  }, [dataGrafik.link]);  
  return { data };
};

export default GetDataByeLengt;
