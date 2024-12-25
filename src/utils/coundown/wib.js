function setTargetDateWIB() {
  const options = {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  
  const cekdata = new Date().toLocaleString('en-US', options);
  
  return {cekdata}
  }
  
export default setTargetDateWIB