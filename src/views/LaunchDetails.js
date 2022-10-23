import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import {BrowserRouter,Routes, Route,Link} from "react-router-dom"

const LaunchDetails = () => {
  const {id} = useParams();
  const [launch, setLaunch] = useState();

  const getLaunchDetailsFromService = async() =>{
    const launchDetails = await simpleGet(`https://api.spacexdata.com/v3/launches/${id}`);
    console.log(launchDetails.responsedata);
    setLaunch(launchDetails.responsedata);
  };

  useEffect(() => {
    getLaunchDetailsFromService();
  }, []);


  return (
    <div>
      <h2>{launch?.mission_name}</h2>
      <h2>{launch?.launch_year} </h2>

      <h3 className={launch?.launch_success?"success": "fail"} >Estado de la misión:  <span>{launch?.rocket.rocket_name}  </span></h3>
      <Link to='/'><button>Volver</button></Link>
    </div>
  );
}

export default LaunchDetails;
