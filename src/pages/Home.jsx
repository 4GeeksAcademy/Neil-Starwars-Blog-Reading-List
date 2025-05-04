import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { PlanetDetails } from "./PlanetDetails.jsx";
import { StarshipDetails } from "./StarshipDetails.jsx";


export const Home = () => {

	const { store, dispatch, GetCharacters, GetPlanets, GetStarships } = useGlobalReducer()
	const [ Characters, setCharacters ] = useState()
	const [ planets, setPlanets ] = useState()
	const [ starships, setStarships ] = useState()

	useEffect(() => {
		if (store.characters.length == 0) {
			GetCharacters()
		}
		if (store.planets.length == 0) {
			GetPlanets()
		}
		if (store.starships.length == 0) {
			GetStarships()
		}

	}, [])


	useEffect(() => {
		GetCharacters(store.characters)
	}, [store.characters])


	useEffect(() => {
		GetPlanets(store.planets)
	}, [store.planets])

	useEffect(() => {
		GetStarships(store.starships)
	}, [store.starships])



	return (
		<div className="text-center mt-5">
			<h2>Characters</h2>
			<div className="dflex col-10 overflow-auto mt-5 mx-auto">
				{Characters?.map((character, index) => {
					return <CharacterCard key={character.uid} type={"character"} name={character.name} uid={character.uid} />
				})}
			</div>
			<h2>Planets</h2>
			<div className="dflex col-10 overflow-auto mt-5 mx-auto">
				{planets?.map((planet, index) => {
					return <CharacterCard key={planet.uid} type={"planet"} name={planet.name} uid={planet.uid} />
				})}
			</div>
			<h2>Starships</h2>
			<div className="dflex col-10 overflow-auto mt-5 mx-auto">
				{starships?.map((starship, index) => {
					return <CharacterCard key={starship.uid} type={"starship"} name={starship.name} uid={starship.uid} />
				})}
			</div>
		</div>
	);
}; 