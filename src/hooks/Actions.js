export const GetCharacters = async (payload,dispatch) => {
    let response = await fetch("https://www.swapi.tech/api/people");
    let data = response.json

    dispatch({
        type: "add_character",
        payload: data.results,
    });
}



export const GetOneCharacter = async (payload,dispatch) => {
    let response = await fetch("https://www.swapi.tech/api/people" + payload);
    let data = response.json

    dispatch({
        type: "add_character",
        payload: data.results,
    });
}