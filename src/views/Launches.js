import React, { useEffect, useState } from 'react';
import { simpleGet } from '../services/simpleGet';


const Launches = () => {
    
    const [launches, setlaunches] = useState();
    
    const getLaunchesFromService = async () =>{
        const launchesFromServices = await simpleGet('https://api.spacexdata.com/v3/launches?');
        console.log(launchesFromServices.responsedata);
    }

    useEffect(() => {
        getLaunchesFromService();
    }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default Launches;
