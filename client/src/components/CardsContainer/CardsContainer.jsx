import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"


const CardsContainer = () =>{ 
    const videogamesRender = useSelector(state=>state.videogamesRender)
    //estado local
    const [currentPage, setCurrentPage] = useState(1);
   

    useEffect(() => {
        setCurrentPage(1); // Reiniciar currentPage a 1 cuando  cambie
    }, [videogamesRender]);

    //variables necesarias para el paginado
    const ITEMS_PER_PAGE = 15;
    const indexLastItem = currentPage * ITEMS_PER_PAGE;
    const indexFirstItem = indexLastItem - ITEMS_PER_PAGE;
    const totalPages = Math.ceil(videogamesRender.length / ITEMS_PER_PAGE);

    //items que va a ir mostrando el contenedor de cards
    const currentItems = videogamesRender.slice(indexFirstItem, indexLastItem);

    const handlePrevious = () => {
        (currentPage > 1) && setCurrentPage(currentPage - 1)
    };
    const handleNext = () => {
        (currentPage < totalPages) && setCurrentPage(currentPage + 1)
    };
    return (
        <div>
        <div className={style.container}> 
            {currentItems.map(videogame =>{
                return <Card
                key={videogame.id}
                id={videogame.id}
                name= {videogame.name}
                rating={videogame.rating}
                genres={videogame.genres}
                background_image={videogame.background_image}
                />
            })}
        </div>
         {(videogamesRender.length > ITEMS_PER_PAGE) ? //renderizado condicional pedido en la presentacion
         <div >
             <label >Page: {currentPage}</label>
             <button  onClick={handlePrevious}>PREVIOUS</button>
             <button  onClick={handleNext}>NEXT</button>
         </div> : <></>}
         </div>
    )
}

export default CardsContainer