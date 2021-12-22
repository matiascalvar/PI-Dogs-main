import { GET_BREEDS, GET_TEMPERAMENT } from "../actions";

var initialState = {
    breeds: [],
    temperaments: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
      case GET_BREEDS:
          return {
              ...state,
              breeds: state.breeds.concat(action.payload)
            //    arr: [...state.arr, action.newItem]
          };
      case GET_TEMPERAMENT:
          return {
              ...state,
              temperaments: state.temperaments.concat(action.payload)
            //    arr: [...state.arr, action.newItem] para un solo element. concat para array
          };

      default:
          return { ...state };
    };
};

