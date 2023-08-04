import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"
const CardsContainer = () =>{
const cards = useSelector(state=>state.allVideogames)

    return (
    <div className={style.container}> {cards.map(card => {
        return <Card
        id={card.id}
        name={card.name}
        background_image={card.background_image}
        released={card.released}
        rating={card.rating}
        created={card.created}
        genres={card.genres}
        platforms={card.platforms}
        />
    })}

    </div>)
    }
    
    export default CardsContainer