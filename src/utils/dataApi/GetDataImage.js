import  { useEffect, useState } from 'react'

const GetDataImage = (params) => {
    const [dataImage, setDataImage] = useState(`${process.env.REACT_APP_BASE_URL}/${params}`)
      useEffect(() => {
        const interval = setInterval(() => {
          setDataImage(`${process.env.REACT_APP_BASE_URL}/${params}`);
        }, 10000);
        return () => clearInterval(interval);
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
  return {dataImage}
}


export default GetDataImage