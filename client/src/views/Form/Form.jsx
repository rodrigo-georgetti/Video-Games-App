import { useState } from "react"

const Form = () =>{

    const [form, setForm] = useState({
        name:"",
        released:"",
    })

    const [errors, setErrors] = useState({
        name:"",
        released:"",
    })

const changeHandler = (event)=>{
const property = event.target.name
const value = event.target.value
setForm({...form, [property]:value})
validate({...form, [property]:value})

const validate = (form) =>{
    if (form.email.includes("@")){
setErrors({...errors,name:""})
    } else{
        setErrors({...errors,name:"hay un error"})
    }
}



}

    return( 
    <form>
        <div>
            <label >Name: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            <span>{errors.name}</span>
        </div>
        <div>
            <label >Released: </label>
            <input type="text" value={form.released} onChange={changeHandler} name="released"/>
        </div>
    </form>
    )
    }
    
    export default Form