import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../redux/helpers";
import style from './Detail.module.css'

const Detail = () =>{
    const { id,} = useParams();
    const [videogame, setVideogame] = useState({});

useEffect(()=>{
    axios(`${BASE_URL}/videogames/${id}`).then(
        ({data}) =>{
            if (data.name){
                setVideogame(data)
            } else {
                window.alert("no existe videojuego con ese ID")
            }
        }
    )
    return setVideogame({})
}, [id]
)

    return (
        <div>
            {(videogame.genres && videogame.platforms)&& (<>
            <h1>ID: {videogame.id}</h1>
            <h1>{videogame.name}</h1>
            <h2>Released: {videogame.released}</h2>
            <h2>Rating: {videogame.rating}</h2>
  <h2>Genres: {videogame.genres.map((genre) => genre.name).join(', ')}</h2>
  <h2>Platforms: {videogame.platforms.map((platform) => platform.name).join(', ')}</h2>
<p>Description: {videogame.description}</p>  
            <img className={style.image} src={videogame.background_image} alt=""></img>
            </>
            )}
        </div>
        
    )
    }
    
    export default Detail