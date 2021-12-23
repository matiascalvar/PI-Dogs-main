import { GET_BREEDS, GET_TEMPERAMENT, ORDER_ZA, ORDER_AZ } from "../actions";

var initialState = {
    breeds: [],
    temperaments: [],
    breedSearched: []
}

/*
{e.name}
weight={e.weight}
temperament={e.temperament}
image={e.image}
key={e.id}
*/
export default function reducer (state = initialState, action) {
  switch (action.type) {
      case GET_BREEDS:
          return {
              ...state,
              breeds: action.payload
            //    arr: [...state.arr, action.newItem]
          };
      case GET_TEMPERAMENT:
          return {
              ...state,
              temperaments: action.payload
            //    arr: [...state.arr, action.newItem] para un solo element. concat para array
          };
      case ORDER_ZA:
          return {
              ...state,
              breeds: state.breeds.sort((a, b) => b.name.localeCompare(a.name))
          };
      case ORDER_AZ:
          return {
              ...state,
              breeds: state.breeds.sort((a, b) => a.name.localeCompare(b.name))
          };

      default:
          return { ...state };
    };
};

