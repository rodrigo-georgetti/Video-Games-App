import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar'
const NavBar = () =>{
    return (
        <div className={style.container}>
<NavLink to="/home">HOME</NavLink>
<SearchBar/>
<NavLink to="/create">FORM</NavLink>

        </div>
    )
}

export default NavBar