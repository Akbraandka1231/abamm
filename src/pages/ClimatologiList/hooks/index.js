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

  const dataClimatologi = [
    {
      name1: "Climatologi 001",
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
      link: "/climatologi-canti",
      timeDeferen : data && data[1].feedLatency === "INACTIVE" ? data[1].feedLatency : confersiTime(data && data[1].feedLatency )
    },
    {
      name2: "Climatologi 002",
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
      link: "/climatologi-canti",
      timeDeferen : confersiTime(data && data[2].feedLatency )
    },
  ];
  return { dataClimatologi , data, ElapsedTime };
};

export default Index;