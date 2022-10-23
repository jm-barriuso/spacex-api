import React, { useEffect, useState } from 'react';
import { simpleGet } from '../services/simpleGet';


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
                {launches?.map((lauch, index)=> <li key={index}> {lauch.mission_name} </li> ) }
            </ul>
        </div>
    );
}

export default Launches;
