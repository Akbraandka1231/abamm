import moment from "moment";

const ElapsedTime = () => {
    // const waktu =
    //   (new Date() -
    //     new Date(moment(date).format("hh:mm"))) /
    //   1000 ;

    // if (waktu >= 30.44 * 24 * 3600) {
    //   return `${Math.floor(waktu / 2630016)} bulan`;
    // } else if (waktu >= 604800) {
    //   return `${Math.floor(waktu / 604800)} minggu`;
    // } else if (waktu >= 86400) {
    //   return `${Math.floor(waktu / 86400)} hari`;
    // } else if (waktu >= 3600) {
    //   return `${Math.floor(waktu / 3600)} jam`;
    // } else if (waktu >= 60) {
    //   return `${Math.floor(waktu / 60)} menit`;
    // } else if(waktu < 60){
    //   return `${waktu} detik`;
    // } else{
    //   return ''
    // }
    const waktu =   moment(new Date(), 'dd-mm-yyyy hh:mm').format('h:mm:ss.SSS A')
    return waktu
  };

  export default ElapsedTime