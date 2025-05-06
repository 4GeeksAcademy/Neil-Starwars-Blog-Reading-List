import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { StarshipCard } from "../components/StarshipCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";


export const Home = () => {

	const { store, dispatch, getCharacters, getPlanets, getStarships } = useGlobalReducer()
	const [ characters, setCharacters ] = useState([])
	const [ planets, setPlanets ] = useState([])
	const [ starships, setStarships ] = useState([])

	useEffect(() => {
		if (store.characters.length == 0) {
			getCharacters()
		}
		if (store.planets.length == 0) {
			getPlanets()
		}
		if (store.starships.length == 0) {
			getStarships()
		}

	}, [])


	useEffect(() => {
		setCharacters(store.characters)
	}, [store.characters])

	useEffect(() => {
		setPlanets(store.planets)
	}, [store.planets])

	useEffect(() => {
		setStarships(store.starships)
	}, [store.starships])



	return (
		<div className="text-center mt-5">
			<h2>Characters</h2>
			<div className="dflex col-10 overflow-auto mt-5 mx-auto">
				{characters?.map((character, index) => {
					return <CharacterCard key={character.uid} type={"character"} name={character.name} uid={character.uid} />
				})}
			</div>
			<h2>Planets</h2>
			<div className="dflex col-10 overflow-auto mt-5 mx-auto">
				{planets?.map((planet, index) => {
					return <PlanetCard key={planet.uid} type={"planet"} name={planet.name} uid={planet.uid} />
				})}
			</div>
			<h2>Starships</h2>
			<div className="dflex col-10 overflow-auto mt-5 mx-auto">
				{starships?.map((starship, index) => {
					return <StarshipCard key={starship.uid} type={"starship"} name={starship.name} uid={starship.uid} />
				})}
			</div>
		</div>
	);
}; 