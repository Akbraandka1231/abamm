import React, { useState, useEffect } from 'react';
const Countdown = (timeexp) => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const targetDate =  new Date(timeexp);
    let interval;
    if(timeexp === null) {
      setCountdown(null)
    } else{
      
    function calculateCountdown() {
      const currentDate = new Date();
      const targetDateTime = targetDate.getTime();

      if (currentDate.getTime() > targetDateTime) {
        targetDate.setMonth(targetDate.getMonth() + 1);
      }

      const timeDiff = targetDate.getTime() - currentDate.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }

    calculateCountdown();

    interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    }
  }, [timeexp]);

 return {countdown}
};

export default Countdown;
