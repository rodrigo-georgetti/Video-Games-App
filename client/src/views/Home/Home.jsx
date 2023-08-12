import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getVideogames } from "../../redux/actions"
import { useNavigate } from "react-router-dom"

const Home = () =>{
    const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }
    const dispatch = useDispatch()
useEffect(()=>{
dispatch(getVideogames())
},[dispatch])

    return (<>
    <button onClick={handleBackClick}>Go Back</button>
    <CardsContainer/>
    </>
    )
}

export default Home