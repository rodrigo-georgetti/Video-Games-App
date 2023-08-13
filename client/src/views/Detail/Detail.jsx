import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { getVideogameById } from "../../redux/actions"

const Detail = () =>{
    const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }
const {id} = useParams()
const dispatch = useDispatch()


useEffect(()=>{
    dispatch(getVideogameById(id))
}, [dispatch, id])

const videogame = useSelector(state=>state.videogame)

    return (<div>
        
        <button onClick={handleBackClick}>Go Back</button>
        <h1>DETAIL</h1>
        <h2>ID: {videogame.id}</h2>
        <h2>Name: {videogame.name}</h2>
        <h2>Description: {videogame.description}</h2>
        <h2>Released: {videogame.released}</h2>
        <h2>Rating: {videogame.rating}</h2>
        {videogame.genres && (<h2>Genres: {videogame.genres.map((genre, index) => (
      <span key={genre.id}>
        {genre.name}
        {index !== videogame.genres.length - 1 ? ', ' : ''}
      </span>
    ))}</h2>)}
    
    {videogame.platforms && (<h2>Platforms: {videogame.platforms.map((platforms, index) => (
      <span key={platforms.id}>
        {platforms.name}
        {index !== videogame.platforms.length - 1 ? ', ' : ''}
      </span>
    ))}</h2>)}
        <img src={videogame.background_image} alt=""></img>
    </div>
   
    )
}

export default Detail