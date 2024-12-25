import axios from "axios";
import moment from "moment/moment";
import timeZone from "moment-timezone";
import { useEffect, useState } from "react";

timeZone.tz.add(["Asia/Jakarta|WIB +07|-7|0|"]);

const Index = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/status`)
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
      sensor: data && data[1].sensor,
      location: data && data[1].location,
      country: data && data[1].country,
      LastValue: data && data[1].lastWater,
      lastDate:
        data &&
        `${moment
          (data[1].timestamp)
          .format("DD MMMM YYYY, HH:mm:ss")} `,
      ElapsedTime: ElapsedTime(data && data[1].timestamp ),
      link: "/pumma-gebang",
      timeDeferen : data && data[1].feedLatency === "INACTIVE" ? data[1].feedLatency : confersiTime(data && data[1].feedLatency )
    },
    {
      name2: "PUMMA U-TEWS 002",
      nameLocation2 : "Canti",
      sensor: data && data[2].sensor,
      location: data && data[2].location,
      country: data && data[2].country,
      LastValue: data && data[2].lastWater,
      lastDate:
        data &&
        `${moment
          (data[0].timestamp)
          .format("DD MMMM YYYY, HH:mm:ss")} `,
      ElapsedTime: ElapsedTime(data && data[2].timestamp),
      link: "/pumma-canti",
      timeDeferen : confersiTime(data && data[2].feedLatency )
    },
    {
      name3: "PUMMA U-TEWS 003",
      nameLocation3 : "Panjang",
      sensor: data && data[0].sensor,
      location: data && data[0].location,
      country: data && data[0].country,
      LastValue: data && data[0].lastWater,
      lastDate:
        data &&
        `${moment
          (data[0].timestamp)
          .format("DD MMMM YYYY, HH:mm:ss")} `,
      ElapsedTime: ElapsedTime(data && data[0].timestamp),
      link: "/pumma-panjang",
      timeDeferen : confersiTime(data && data[0].feedLatency )
    },
    {
      name4 : "PUMMA U-TEWS 004",
      nameLocation4 : "Marina Jambu",
      link: "/pumma-marina",
    },
    {
      name4 : "PUMMA U-TEWS 005",
      nameLocation4 : "Pangandaran",
      link: "/pumma-pangandaran"
    }
  ];
  return { dataPumma , data, ElapsedTime };
};

export default Index;
