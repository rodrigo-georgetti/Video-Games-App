
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../../redux/actions";
import { formatAndPost } from "./formatAndPost";
import validation from "./validation";
import { cleanForm } from "./CleanForm";

const Form = () => {
    //estado global con los temperamentos que tiene mi DB y los traere para mapearlos en mi SELECT options
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    //estados locales
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [inputsForm, setInputsForm] = useState({
        name: '',
        description: '',
        background_image: '',
        released: '',
        rating: '',
        platforms: '',
    })

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        background_image: '',
        released: '',
        rating: '',
        platforms: '',
    })

    //SELECT OPTIONS
    const handleSelectChange = (event) => {
        const selectedOptions = event.target.value; //opciones del select
        
        const uniqueOptions = new Set(selectedGenres); //Set con opciones (sin repetir)
        uniqueOptions.add(selectedOptions); //agrego al Set cada opcion
        
        (Array.from(uniqueOptions).length <= 5) && setSelectedGenres(Array.from(uniqueOptions));//valido que se puedan agregar hasta 5
    };
    //INPUTS
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInputsForm({ ...inputsForm, [property]: value })
        setErrors(validation({ ...inputsForm, [property]: value }))
    };
    //BOTON CREATE 
    const handleSubmit = (event) => {
        event.preventDefault();
        //si el objeto errors luego de validation() no tiene errores y al menos seleccione 1 temp. envio el posteo la data del Form
        if((Object.keys(errors).length === 0) & (selectedGenres.length!==0)) {
            formatAndPost(inputsForm, selectedGenres)
            cleanForm(setInputsForm, setSelectedGenres);
        }       
    };

    //const genres = useSelector(state => state.genres)
    const genres = ["Action", "Indie"] 
    console.log("juan")
    console.log(genres)//array con todos los temperamentos de la DB
    return (
        <form  onSubmit={handleSubmit} >
            <div >
                <label >Name</label>
                <input  value={inputsForm.name} name="name"  onChange={handleInputChange} />
                
            </div>
            <div >
                <label >Description</label>
                <input  value={inputsForm.description} name="description"  onChange={handleInputChange} />
                
            </div>
            <div >
                <label >Background_image</label>
                <input  value={inputsForm.background_image} name="background_image"  onChange={handleInputChange} />
                
            </div>
            <div >
                <label >Rating</label>
                <input  value={inputsForm.rating} name="rating"  onChange={handleInputChange} />
                
            </div>
            <div >
                <label >Platforms</label>
                <input  value={inputsForm.platforms} name="platforms"  onChange={handleInputChange} />
                
            </div>
            <select  multiple value={selectedGenres} onChange={handleSelectChange}>
                {genres.map((temp, index) => (
                    <option key={index} value={temp}>
                        {temp}
                    </option>
                ))}
            </select>
            <p>SELECTED TEMPERAMENTS: {selectedGenres.join(', ')}</p>
            <button  type="submit" >CREATE</button>
            

        </form>
    )
};

export default Form;