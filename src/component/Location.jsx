import React, {useState, useEffect} from 'react'

function Location() {
    const [location, setLocation] = useState({});

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7c3c128984158b9874055129a103a29f`
          )
            .then(res => res.json())
            .then(data => setLocation(data));

            
        },
        error => console.error(error)
      );
    }, []);
  
  
    return <div>
          <p>{location.name}</p>
          
       </div>;
}

export default Location