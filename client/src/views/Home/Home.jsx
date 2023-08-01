import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getVideogames } from "../../redux/actions"
const Home = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
dispatch(getVideogames())
},[dispatch])
return <>
<h1>Vista Home</h1>
<CardsContainer/>

</>
}

export default Home