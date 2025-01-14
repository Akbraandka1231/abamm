import axios from "axios";
import moment from "moment/moment";
import timeZone from "moment-timezone";
import { useEffect, useState } from "react";

timeZone.tz.add(["Asia/Jakarta|WIB +07|-7|0|"]);

const Index = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    await axios
      .get(`https://c-greenproject.org:4443/status`)
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
  }, []);
  
  const confersiTime= (time) => {
    const waktu = time / 1000;
    if (waktu >= 30.44 * 24 * 3600) {
      return `${Math.floor(waktu / 2630016)} bulan`;
    } else if (waktu >= 604800) {
      return `${Math.floor(waktu / 604800)} minggu`;
    } else if (waktu >= 86400) {
      return `${Math.floor(waktu / 86400)} hari`;
    } else if (waktu >= 3600) {
      return `${Math.floor(waktu / 3600)} jam`;
    } else if (waktu >= 60) {
      return `${Math.floor(waktu / 60)} menit`;
    } else if(waktu < 60){
      return `${waktu} detik`;
    } else{
      return ''
    }
  }

  const ElapsedTime = (date) => {
    const waktu =
      (new Date() -
        new Date(moment(date).format("DD MMMM YYYY , HH:mm:ss"))) /
      1000 ;

    if (waktu >= 30.44 * 24 * 3600) {
      return `${Math.floor(waktu / 2630016)} bulan`;
    } else if (waktu >= 604800) {
      return `${Math.floor(waktu / 604800)} minggu`;
    } else if (waktu >= 86400) {
      return `${Math.floor(waktu / 86400)} hari`;
    } else if (waktu >= 3600) {
      return `${Math.floor(waktu / 3600)} jam`;
    } else if (waktu >= 60) {
      return `${Math.floor(waktu / 60)} menit`;
    } else if(waktu < 60){
      return `${waktu} detik`;
    } else{
      return ''
    }
  };

  const dataPumma = [
    {
      name1: "PUMMA U-TEWS 001",
      nameLocation1 : "Gebang",
      link: "/pumma-gebang"
    },
    {
      name2: "PUMMA U-TEWS 002",
      nameLocation2 : "Canti",
      link: "/pumma-canti"
    },
    {
      name3: "PUMMA U-TEWS 003",
      nameLocation3 : "Panjang",
      link: "/pumma-panjang"
    },
    {
      name4 : "PUMMA U-TEWS 004",
      nameLocation4 : "Marina Jambu",
      link: "/pumma-marina",
    },
    {
      name5 : "PUMMA U-TEWS 005",
      nameLocation5 : "Pangandaran",
      link: "/pumma-pangandaran"
    },
    {
      name6 : "PUMMA U-TEWS 006",
      nameLocation6 : "Pulau Sebesi",
      link: "/pumma-psebesi"
    }
  ];
  return { dataPumma , data, ElapsedTime };
};

export default Index;
