import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";





export const DetailsPage = () => {
    const { uid } = useParams()
    const [ character, setCharacter ] = useState({})
    const { store, dispatch } = useGlobalReducer()


    useEffect(() => {
        getEachCharacter()
    }, [])



    const getEachCharacter = async () => {
        let response = await fetch("https://www.swapi.tech/api/people/" + uid);
        let data = await response.json()
        setCharacter(data.result.properties)
    }

    return (
        <div className="mt-5 text-center">
            <h1>Name:</h1>
            <h3>{character.name}</h3>

            <h1>Gender:</h1>
            <h3>{character.gender}</h3>
            
            <h1>Eye Color:</h1>
            <h3>{character.eye_color}</h3>
        </div>
    );
};