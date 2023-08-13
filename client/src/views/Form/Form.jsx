import axios from "axios"
import React ,{ useState, useEffect} from "react"
import validate from "./validate"
import { useDispatch, useSelector} from "react-redux"

import { getGenres, getPlatforms } from "../../redux/actions"




const Form = () =>{

const dispatch = useDispatch();

useEffect(() => {
    
    dispatch(getGenres())
    dispatch(getPlatforms())
}, [dispatch])
	

    const [form, setForm] = useState({
        name: "",
        description:"",
        background_image:"",
        released:"",
        rating:"",
        genres:"",
        platforms:"",
    })

    const [errors, setErrors] = useState({
        name: "",
        description:"",
        background_image:"",
        released:"",
        rating:"",
        genres:"",
        platforms:"",

    })
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
const changeHandler = (event)=>{
const property = event.target.name
const value = event.target.value
setErrors(validate({...form, [property]:value}))
setForm({...form, [property]:value})
}

const handleGenresChange = (event) => {
    const selectedOptions = event.target.value; //opciones del select
    
    const uniqueOptions = new Set(selectedGenres); //Set con opciones (sin repetir)
    uniqueOptions.add(selectedOptions); //agrego al Set cada opcion
    console.log("Selected Genres:", selectedOptions);
    setSelectedGenres(Array.from(uniqueOptions));//valido que se puedan agregar hasta 5
};
const handlePlatformsChange = (event) => {
    const selectedOptions = event.target.value; //opciones del select
    
    const uniqueOptions = new Set(selectedPlatforms); //Set con opciones (sin repetir)
    uniqueOptions.add(selectedOptions); //agrego al Set cada opcion
    console.log("Selected PLatforms:", selectedOptions)
    setSelectedPlatforms(Array.from(uniqueOptions));//valido que se puedan agregar hasta 5
};

const SubmitHandler = (event)=>{
event.preventDefault()
if((Object.keys(errors).length === 0) & (selectedPlatforms.length!==0) & (selectedGenres.length!==0)){
const newDog = {
    name: form.name,
    description: form.description,
    background_image: form.background_image,
    released: form.released,
    rating: parseFloat(form.rating),
    genres: selectedGenres,
    platforms:selectedPlatforms
}

axios.post("http://localhost:3001/videogames", newDog)
.then(res=>alert(res))
.catch(error=>alert(error))}
}
const genres = useSelector(state => state.genres)//array con todos los temperamentos de la DB
const platforms = useSelector(state => state.platforms)

    return (
        <form onSubmit={SubmitHandler} >
            {/* <button onClick={handleBackClick}>Go Back</button> */}
        <div> 
            <label>Name: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" ></input>
            <span>{errors.name1 ? <p>{errors.name1}</p> : <p>{errors.name2}</p>}</span>
        </div>
        <div> 
            <label>Description: </label>
            <input type="text" value={form.description} onChange={changeHandler} name="description" ></input>
            <span>{errors.description1 ? <p>{errors.description1}</p> : <p>{errors.description2}</p>}</span>
        </div>
        <div> 
            <label>Background_image: </label>
            <input type="text" value={form.background_image} onChange={changeHandler} name="background_image" ></input>
            <span><p>{errors.background_image}</p></span>
        </div>
        
        <div> 
            <label>Released: </label>
            <input type="text" value={form.released} onChange={changeHandler} name="released" ></input>
            <span>{errors.released1 ? <p>{errors.released1}</p> : <p>{errors.released2}</p>}</span>
        </div>
        


        <div> 
            <label>Rating: </label>
            <input type="text" value={form.rating} onChange={changeHandler} name="rating" ></input>
            <span>{errors.rating1 ? <p>{errors.rating1}</p> : <p>{errors.rating2}</p>}</span>
        </div>
        <div>
        <select multiple value={selectedGenres} onChange={handleGenresChange}>
    {genres && genres.map((genre, index) => (
        <option key={index} value={genre.name}>
            {genre.name}
        </option>
    ))}
</select>
            <p>SELECTED GENRES: {selectedGenres.join(', ')}</p>
            </div>
        
            <div>
        <select multiple value={selectedPlatforms} onChange={handlePlatformsChange}>
    {platforms && platforms.map((platform, index) => (
        <option key={index} value={platform.name}>
            {platform.name}
        </option>
    ))}
</select>
            <p>SELECTED PLATFORMS: {selectedPlatforms.join(', ')}</p>
            </div>
        

        {/* <div> 
            <label>Platforms: </label>
            <input type="text" value={form.platforms} onChange={changeHandler} name="platforms" ></input>
        </div> */}
        <button type="submit" >SUBMIT</button>
        </form>
    )
}

export default Form