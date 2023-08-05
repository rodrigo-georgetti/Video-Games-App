import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"


const CardsContainer = () =>{ 
    const allVideogames = useSelector(state=>state.allVideogames)
    return (
        <div className={style.container}> 
            {allVideogames.map(videogame =>{
                return <Card
                
                name= {videogame.name}
                />
            })}
        </div>
    )
}

export default CardsContainer