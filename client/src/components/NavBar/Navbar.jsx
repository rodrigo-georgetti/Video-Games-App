import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar'
import FiltersBar from '../FiltersBar/FiltersBar'
const NavBar = () =>{
    return (
        <div className={style.container}>
<NavLink to="/home">HOME</NavLink>
<SearchBar/>
<FiltersBar/>
<NavLink to="/create">FORM</NavLink>

        </div>
    )
}

export default NavBar