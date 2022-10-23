import React, { useEffect, useState } from 'react';
import { simpleGet } from '../services/simpleGet';
import {BrowserRouter,Routes, Route,Link} from "react-router-dom"


const Launches = () => {

    const [launches, setLaunches] = useState();

    const getLaunchesFromService = async () =>{
        const launchesFromServices = await simpleGet('https://api.spacexdata.com/v3/launches?');
        console.log(launchesFromServices.responsedata);
        setLaunches(launchesFromServices.responsedata)
    }

    useEffect(() => {
        getLaunchesFromService();
    }, []);

    return (
        <div>
            <ul>
                {launches?.map((lauch, index)=> <Link to={`/${lauch.flight_number}`}><li key={index}> {lauch.mission_name} </li></Link> ) }
            </ul>
        </div>
    );
}

export default Launches;
