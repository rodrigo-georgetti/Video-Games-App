
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameByName } from "../../redux/actions";

const SearchBar = () => {
    const [name, setName] = useState("")
    const dispatch= useDispatch()

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const searchByName=()=>{
        const reLetters = /^[a-zA-Z]{2,50}$/; //entre 2 y 50 caracteres solo letras

        (reLetters.test(name)===true)? dispatch(getVideogameByName(name))
                                      : alert("formato de busqueda incorrecto")  
    };
    

    return (
        <div >
            <input  placeholder="Search by name" maxLength={50} value={name} onChange={handleChange}></input>
            <button  onClick={() => { searchByName(name); setName("") }} >SEARCH</button>
        </div>
    )
};

export default SearchBar;