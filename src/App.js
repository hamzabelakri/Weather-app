import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const [location, setLocation] = useState("");

  const onChange = (event) => {
    setLocation(event.target.value);
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const res = await axios.get(url);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        alert("location not found");
      }
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={onChange}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        {data.name === undefined ? (
          <p className="center">Type in the search bar to find a city</p>
        ) : (
          <div>
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>

            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

/* import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {getData} from './Redux/Action'


function App() {

  const state = useSelector((state)=>state.Reducer)


 const dispatch=useDispatch()
 
 const [caracter, setCaracter] = useState("");
  const handleChange = (event) => {
    setCaracter(event.target.value);
};

const onClick =(event)=>{
  if (caracter===""){
    console.log('type to search')
  }else{dispatch(getData(caracter))
    setCaracter("");}
<p>lorem3</p>
};


  return (
 <div>
    <div >
     <Button variant="primary" onClick={onClick}>Search</Button>  
      <input value={caracter}
        onChange={handleChange} 
        placeholder='Enter Location'
        type="text"/>


</div>
<div >
     <p>where</p>

     {caracter!=""&& <p>lorem3</p>}
    


</div>
</div>
  );
}

export default App; */

/* import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getData} from './Redux/Action'



function App() {
 const state = useSelector((state)=>state.Reducer)


 const dispatch=useDispatch()
 
 const [caracter, setCaracter] = useState("");
  const handleChange = (event) => {
    setCaracter(event.target.value);
    dispatch(getData(caracter))

  };


  return (
    <div className="app">
    <div className="search">
      <input
    value={caracter}
        onChange={handleChange} 
        placeholder='Enter Location'
        type="text" />
    </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <p>where</p>
        </div>
        <div className="temp">
          °F
        </div>
        <div className="description">
          
        </div>
      </div>

    
        <div className="bottom">
          <div className="feels">
           °F
            <p>Feels Like</p>
          </div>
          <div className="humidity">
           %
            <p>Humidity</p>
          </div>
          <div className="wind">
           MPH
            <p>Wind Speed</p>
          </div>
        </div>




    </div>
  </div>
);

}

export default App;
 */
