import React, {useState, useEffect} from 'react'

function Location() {
    const [location, setLocation] = useState('Lagos');

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7c3c128984158b9874055129a103a29f`
          )
            .then(res => res.json())
            // .then(data => setLocation(data.name));

            console.log(res)
        },
        error => console.error(error)
      );
    }, []);
  
    return <div>City: {location}</div>;
}

export default Location