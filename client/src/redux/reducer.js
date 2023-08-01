import { GET_VIDEOGAMES } from "./actions";

const initialState = {
    cards: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
case GET_VIDEOGAMES:
return {...state, cards: action.payload}
      default:
        return { ...state };
    }
  }
  
  export default rootReducer;
  