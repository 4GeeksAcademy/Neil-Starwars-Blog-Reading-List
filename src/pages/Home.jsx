import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { CharacterCard } from "../components/CharacterCard.jsx";

export const Home = () => {

	const { store, dispatch, GetCharacters, GetPlanets } = useGlobalReducer()
	const { Characters, setCharacters } = useState()
	const { planets, setPlanets } = useState()

	useEffect(() => {
		if (store.charactes.length == 0) {
			GetCharacters()
		}
		if (store.planets.length == 0) {
			GetPlanets()
		}

	}, [])


	useEffect(() => {
		GetCharacters(store.characters)
	}, [store.characters])


	useEffect(() => {
		GetPlanets(store.planets)
	}, [store.planets])



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
		</div>
	);
}; 