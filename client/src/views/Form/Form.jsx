import axios from "axios"
import React ,{ useState } from "react"
import validate from "./validate"


//import { useNavigate } from "react-router-dom";

const Form = () =>{
//     const navigate = useNavigate();

//   function handleBackClick() {
//     navigate(-1);
//   }
	
	
	
	
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

const changeHandler = (event)=>{
const property = event.target.name
const value = event.target.value
setErrors(validate({...form, [property]:value}))
setForm({...form, [property]:value})
}



const submitHandler = (event)=>{
event.preventDefault()
console.log(form)
const newDog = {
    name: form.name,
    description: form.description,
    background_image: form.background_image,
    released: form.released,
    rating: parseFloat(form.rating),
    genres: form.genres,
    platforms:form.platforms
}


axios.post("http://localhost:3001/videogames", newDog)
.then(res=>alert(res))
.catch(error=>alert(error))
}

    return (
        <form onSubmit={submitHandler} >
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
            <label>Genres: </label>
            <input type="text" value={form.genres} onChange={changeHandler} name="genres" ></input>
        </div>
        <div> 
            <label>Platforms: </label>
            <input type="text" value={form.platforms} onChange={changeHandler} name="platforms" ></input>
        </div>

        
        <button type="submit" >SUBMIT</button>
        </form>
    )
}

export default Form