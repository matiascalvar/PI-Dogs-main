const axios = require('axios')
export const GET_BREEDS = 'GET_BREEDS';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const ORDER_ZA = 'ORDER_ZA';
export const ORDER_AZ = 'ORDER_AZ';
export const WEIGHT_ASC = 'WEIGHT_ASC';
export const WEIGHT_DESC = 'WEIGHT_DESC';
export const SEARCH_BREED = 'SEARCH_BREED';

export const getBreeds = () => async dispatch => {
    const response = await axios.get("http://localhost:3001/dogs")
    dispatch({type: 'GET_BREEDS', payload: response.data})
}

export const getTemps = () => async dispatch => {
    const temps = await axios.get("http://localhost:3001/temperament")
    dispatch({type: 'GET_TEMPERAMENT', payload: temps.data})
}

export function weightAndAlpha(option) {
  return { type: option}
}

export function searchBreed(option) {
  return { type: 'SEARCH_BREED', payload: option}
}




















// export function getBreeds () {
//     return async function (dispatch) {
//         try {
//             let breeds = await axios.get("http://localhost:3001/dogs")
//             return dispatch({type: 'GET_BREEDS', payload: breeds.data})
//         }
//         catch (e) { console.log(e) }
//     }
// }

// export function getTemps () {
//     return async function (dispatch) {
//         try {
//             let temps = await axios.get("http://localhost:3001/temperament")
//             return dispatch({type: 'GET_TEMPERAMENT', payload: temps.data})
//         }
//         catch (e) { console.log(e) }
//     }
// }