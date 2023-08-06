import axios from "axios"
import { useState } from "react"

const Form = () =>{
    
	
	
	
	
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
validate({...form, [property]:value})
setForm({...form, [property]:value})
}

const validate = (form)=>{
if(form.name.length < 10){
setErrors({...errors,name:""})
} else{
    setErrors({...errors,name:"nombre largo"})
}
}

const submitHandler = (event)=>{
event.preventDefault()
axios.post("http://localhost:3001/videogames", form)
.then(res=>alert(res))
.catch(error=>alert(error))
}

    return (
        <form onSubmit={submitHandler} >
        <div> 
            <label>Name: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" ></input>
            <span>{errors.name}</span>
        </div>
        <div> 
            <label>Description: </label>
            <input type="text" value={form.description} onChange={changeHandler} name="description" ></input>
        </div>
        <div> 
            <label>Background_image: </label>
            <input type="text" value={form.background_image} onChange={changeHandler} name="background_image" ></input>
        </div>
        <div> 
            <label>Released: </label>
            <input type="text" value={form.released} onChange={changeHandler} name="released" ></input>
        </div>
        <div> 
            <label>Rating: </label>
            <input type="text" value={form.rating} onChange={changeHandler} name="rating" ></input>
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