

























































 import { useState } from "react";
 import { useDispatch } from "react-redux";
 import { getVideogamesByName } from "../../redux/actions";

 const SearchBar = () => {
     const [name, setName] = useState("")
     const dispatch= useDispatch()

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const searchByName=()=>{
        dispatch(getVideogamesByName(name))           
    };
    
    return (
        <div >
            <input type="search" onChange={handleChange} value={name} ></input>
            <button onClick={() => { searchByName(name); setName("") }} >SEARCH</button>
        </div>
    )
 };

 export default SearchBar;