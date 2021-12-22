const axios = require('axios')
export const GET_BREEDS = 'GET_BREEDS';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';


// export function getBreeds () {
//     return async function (dispatch) {
//         try {
//             let breeds = await axios.get("http://localhost:3001/dogs")
//             return dispatch({type: 'GET_BREEDS', payload: breeds.data})
//         }
//         catch (e) { console.log(e) }
//     }
// }

export const getBreeds = () => async dispatch => {
    const response = await axios.get("http://localhost:3001/dogs")
    dispatch({type: 'GET_BREEDS', payload: response.data})
}


// export function getTemps () {
//     return async function (dispatch) {
//         try {
//             let temps = await axios.get("http://localhost:3001/temperament")
//             return dispatch({type: 'GET_TEMPERAMENT', payload: temps.data})
//         }
//         catch (e) { console.log(e) }
//     }
// }

export const getTemps = () => async dispatch => {
    const temps = await axios.get("http://localhost:3001/temperament")
    dispatch({type: 'GET_TEMPERAMENT', payload: temps.data})
}
