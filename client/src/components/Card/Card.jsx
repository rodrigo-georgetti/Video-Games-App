import style from "./Card.module.css"

const Card = (props) =>{


    return (
        <div className={style.card}>
            <p>ID {props.id}</p>
            <p>NAME {props.name}</p>
        </div>
    )
}
export default Card