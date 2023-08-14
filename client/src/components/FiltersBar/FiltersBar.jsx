
import { useDispatch, useSelector } from "react-redux";
import { orderVideogames, getGenres, filterByOrigin, filterByGenres } from "../../redux/actions";
import { useEffect } from "react";

const FiltersBar = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])
    
    const handleFilterOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
    };
    const handleFilterGenres=(event)=>{
        dispatch(filterByGenres(event.target.value))
        
    };
    const handleOrder=(event)=>{
        dispatch(orderVideogames(event.target.value))
    };
    
    const genres= useSelector(state=>state.genres);
    return (
        <div >
            <select  onChange={handleFilterOrigin}>
                <option value="AllVideogames">All videogames</option>
                <option value="ApiVideogames">API videogames</option>
                <option value="DbVideogames">DB Videogames</option>
            </select>
            <select  onChange={handleFilterGenres}>
            <option value="">Genres</option>       
                {genres.map((genre, index)=>(
                    <option key={index} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>
            <select  onChange={handleOrder}>
                <option value="OrderAs">Order Asc. A-Z</option>
                <option value="OrderD">Order Desc. Z-A</option>
                <option value="OrderByRatingA">Order by Rating A</option>
                <option value="OrderByRatingD">Order by Rating D</option>
            </select>
            
        </div>
    )
}

export default FiltersBar