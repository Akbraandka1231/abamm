const SimpleMap = ({ latitude, longitude }) => {
  // Membuat URL Google Maps berdasarkan latitude dan longitude
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;

  return (
    <iframe
      title="maps"
      width="100%"
      height="600px"
      id="gmap_canvas"
      src={mapsUrl} // Menggunakan URL yang sudah disesuaikan
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    ></iframe>
  );
};

export default SimpleMap;