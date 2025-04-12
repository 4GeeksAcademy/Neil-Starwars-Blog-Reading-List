import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

  const {store, dispatch, GetCharacters} =useGlobalReducer()
  const {Characters, setCharacters} =useState()

  useEffect(() => {
	GetCharacters()
  }, [])

  useEffect(() => {
	setCharacters(store.Characters)
  }, [store.Characters])

  console.log(Characters)

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				
			</p>
		</div>
	);
}; 