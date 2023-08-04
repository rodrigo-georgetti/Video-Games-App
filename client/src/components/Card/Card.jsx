import style from "./Card.module.css"
import { NavLink } from 'react-router-dom'


const Card = (props) =>{
    const {id ,name, background_image, genres} = props
    return (
        <NavLink to={`/detail/${id}`}>
<div className={style.card}>

        <h2>Name: {name}</h2>
        <h2>Genres: {genres.map((genre) => genre.name).join(', ')}</h2>
        <img className={style.image} src={background_image} alt=""></img>
    </div>
    </NavLink>
    )
    }
    
    export default Card