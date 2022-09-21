import { useEffect, useState } from "react";
import axios from 'axios'

const key = 'AIzaSyC-GWRez2T-X19bkyNXVlf3QnNTdNJEi8Y'

const useGoogleAddress = address => {
    const [map, setMap] = useState({lat: 19.267326, lng: -99.27383 });
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
    
    useEffect(async () => {
        const response = await axios(API)
        if(response.data.status !== "REQUEST_DENIED") {
            setMap(response.data.results[0].geometry.location)
        }
    }, [])

    return map;
    
};

export default useGoogleAddress;