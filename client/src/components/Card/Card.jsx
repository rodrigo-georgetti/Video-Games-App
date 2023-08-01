import style from "./Card.module.css"

const Card = (props) =>{
    return (
    <div className={style.card}>
        <p>
            Name:{props.name}
            
        </p>
        <p>
        Released:{props.released}
        </p>
    </div>)
    }
    
    export default Card