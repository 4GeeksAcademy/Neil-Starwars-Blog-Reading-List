export const GetCharacters = async (payload,dispatch) => {
    let response = await fetch("https://www.swapi.tech/api/people" + payload);
    let data = await response.json()

    dispatch({
        type: "add_character",
        payload: data.results,
    });
}



// export const GetOneCharacter = async (payload,dispatch) => {
//     let response = await fetch("https://www.swapi.tech/api/people" + payload);
//     let data = await response.json()

//     dispatch({
//         type: "add_character",
//         payload: data.results,
//     });
// }



export const GetPlanets = async (payload,dispatch) => {
    let response = await fetch("https://www.swapi.tech/api/planets" + payload);
    let data = await response.json()

    dispatch({
        type: "add_planet",
        payload: data.results,
    });
}




export const GetStarships = async (payload,dispatch) => {
    let response = await fetch("https://www.swapi.tech/api/starships" + payload);
    let data = await response.json()

    dispatch({
        type: "add_starship",
        payload: data.results,
    });
}