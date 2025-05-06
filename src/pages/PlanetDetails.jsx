import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";





export const PlanetDetails = (props) => {
    const { uid } = useParams()
    const [ planet, setPlanet ] = useState({})
    const { store, dispatch } = useGlobalReducer()


    useEffect(() => {
        getEachPlanet()
    }, [])



    const getEachPlanet = async () => {
        let response = await fetch("https://www.swapi.tech/api/planets/" + uid);
        let data = await response.json()
        setPlanet(data.result.properties)
    }

    return (
        <div>
            <div className="mt-5 text-center">
                <h1>Name:</h1>
                <h3>{planet.name}</h3>

                <h1>Terrain:</h1>
                <h3>{planet.terrain}</h3>

                <h1>Gravity:</h1>
                <h3>{planet.gravity}</h3>
            </div>
        </div>
    );
};