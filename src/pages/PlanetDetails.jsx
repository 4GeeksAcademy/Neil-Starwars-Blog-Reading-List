import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";





export const PlanetDetails= () => {
    const { uid } = useParams()
    const { planet, setPlanet } = useState
    const { store, dispatch } = useGlobalReducer()


    useEffect(() => {
        GetEachPlanet()
    }, [])



    const GetEachPlanet = async () => {
        let response = await fetch("https://www.swapi.tech/api/planets/" + uid);
        let data = await response.json()
        setPlanet(data.result.properties)
    }

    return (
        <div className="mt-5 text-center">
            <h1>Name:</h1>
            <h3>{planet.name}</h3>

            <h1>Gender:</h1>
            <h3>{planet.terrain}</h3>
            
            <h1>Eye Color:</h1>
            <h3>{planet.gravity}</h3>
        </div>
    );
};