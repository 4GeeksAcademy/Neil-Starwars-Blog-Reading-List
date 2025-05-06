export const getCharacters = async (dispatch,payload) => {
    let response = await fetch("https://www.swapi.tech/api/people");
    let data = await response.json()
    // if (response.ok) {
    //     console.log("Here are you characters", data)
    // } 
    // for (let details of data.results) {
    //     const detailsResponse = await fetch(details.url)
    //     const detailsCharacters = await detailsResponse.json()
    // }

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



export const getPlanets = async (dispatch,payload) => {
    let response = await fetch("https://www.swapi.tech/api/planets");
    let data = await response.json()

    dispatch({
        type: "add_planet",
        payload: data.results,
    });
}




export const getStarships = async (dispatch,payload) => {
    let response = await fetch("https://www.swapi.tech/api/starships");
    let data = await response.json()

    dispatch({
        type: "add_starship",
        payload: data.results,
    });
}