import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"
import style from "./NavBar.module.css"
const NavBar = () =>{
    return <div className={style.mainContainer}>
        
<Link to="/home">Home</Link>
<SearchBar/>
<Link to="/create">Form</Link>

    </div>
}
    export default NavBar