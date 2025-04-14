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

  const dataBuoy = [
    {
      name1: "U-Buoy 001",
      namelocation1 : "Pulau Sebesi",
      link: "/ubuoy-001",
    },
    {
      name2: "U-Buoy 002",
      namelocation2 : "Anak Krakatau",
      link: "/ubuoy-001"
    },
  ];
  return { dataBuoy , data, ElapsedTime };
};

export default Index;
