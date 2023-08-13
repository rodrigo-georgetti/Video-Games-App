import style from "./Card.module.css"
import { NavLink } from "react-router-dom"

const Card = (props) =>{
const {id, name, rating, genres, background_image} = props

    return (
        <NavLink to={`/detail/${id}`}>
        <div className={style.card}>
            <h1>NAME {name}</h1>
            <h1>RATING {rating}</h1>
            <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
            <img className={style.image} src={background_image} alt="" ></img>
        </div>
        </NavLink>
    )
}
export default Card