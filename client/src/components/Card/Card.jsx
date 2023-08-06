import style from "./Card.module.css"
import { NavLink } from "react-router-dom"
const Card = (props) =>{
const {id, name} = props

    return (
        <NavLink to={`/detail/${id}`}>
        <div className={style.card}>
            <h1>{id}</h1>
            <h1>NAME {name}</h1>
        </div>
        </NavLink>
    )
}
export default Card