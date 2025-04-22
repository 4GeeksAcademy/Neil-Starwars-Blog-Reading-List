import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { CharacterCard } from "../components/CharacterCard.jsx";

export const Home = () => {

  const {store, dispatch, GetCharacters} =useGlobalReducer()
  const {Characters, setCharacters} =useState()

  useEffect(() => {
	GetCharacters()
  }, [])

  useEffect(() => {
	GetCharacters(store.Characters)
  }, [store.Characters])

  console.log(Characters)

	return (
		<div className="text-center mt-5">
			<h2>Characters</h2>
			<div classname="dflex col-10 overflow-auto mt-5 mx-auto">
				{Characters?.map((character, index) =>{
				return	<CharacterCard name={character.name}/>
				})}
			</div>
		</div>
	);
}; 