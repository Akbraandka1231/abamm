import axios from 'axios'
import moment from 'moment';
import  { useEffect, useState } from 'react'

const fetchDataCall = async ({ api }) => {
    let apiReturn = await axios
      .get(api)
      .then(async function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    return apiReturn;
  }

const GetdataPummaCanti = (params) => {
    const [dataPumma, setDataPumma] = useState()
      useEffect(() => {
        const fetchData = async () => {
          let response = await fetchDataCall({ api: `${process.env.REACT_APP_BASE_URL}/${params}` });
          const waktu =   moment(new Date(), 'dd-mm-yyyy hh:mm').format('h:mm:ss.SSS A')
          setDataPumma({
            ...response.data,
            waktu: waktu
          })
        };
        fetchData();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
      // console.log(dataPumma);
    
  return {dataPumma}
}

export default GetdataPummaCanti