import { GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_BY_ID} from "./helpers";

const initialState = {
    allVideogames: [],
     videogamesByName: [],
    // videogameRender: [], //el que renderiza siempre el componente
     videogame: {},
     allGenres: []
  };
  
  const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
case GET_VIDEOGAMES:
return {...state, allVideogames: payload}

case GET_VIDEOGAME_BY_ID:
  return {...state, videogame: payload}

  case GET_VIDEOGAMES_BY_NAME:
  return {...state, videogamesByName: payload, allVideogames: payload}  

  case GET_GENRES:
  return {...state, allGenres: payload}

// case "CLEAN_DETAIL":
//   return {...state, videogame: payload}  




// case "FILTER_ORIGIN": 
// let byOrigin = []
// if (payload === "AllVideogames") {
//   byOrigin = state.allVideogames; //ALL DOGS
//   state.videogamesByName = [];
// } else { //si hay una busqueda por nombre filtro sobre la misma sino filtro sobre allDogs
//   const videogamesToFilter = state.videogamesByName.length !== 0 ? state.videogamesByName : state.allVideogames; 
  
//   byOrigin = (payload === "DbVideogames") ? videogamesToFilter.filter(videogame => videogame.created) //DB DOGS
//                                   : videogamesToFilter.filter(videogame => !videogame.created); //API DOGS
// }
// return {
//   ...state,
//   videogameToRender: byOrigin
// };

// case "FILTER_GENRE":
//   let byGenre=[];    
//   for (const videogame of state.videogameRender){
//       if(videogame.genre!==undefined){
//           (videogame.genre.includes(payload))&& byGenre.push(videogame)
//       }
//   }
// return{
//   ...state,videogamesToRender: byGenre
// }
// case "ORDER_VIDEOGAMES":
//   let ordered = [...state.videogameRender]
//   //trabajo con esa copia porque si uso el estado directo, el useEffect no me renderizaba los cambios en tiempo real
//   ordered = (payload === "OrderA") ? ordered.sort((a, b) => a.name.localeCompare(b.name)) //ALFA ASCENDENTE
//           : (payload === "OrderD") ? ordered.sort((a, b) => b.name.localeCompare(a.name)) //ALFA DESCENDENTE
//            : (payload === "OrderByWeightA") ? ordered.sort((a, b) => a.maxWeight - b.maxWeight) //PESO ASCENDETE
//            : ordered.sort((a, b) => b.maxWeight - a.maxWeight)  //PESO DESCENDENTE
//   return {
//       ...state,
//       videogameRender: ordered
//   };

      default:
        return { ...state };
    }
  }
  
  export default rootReducer;
  

        
        
       
      
            
       

        