import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//import { useNavigate } from "react-router"
import { useEffect } from "react"
import { getVideogameById } from "../../redux/actions"

const Detail = () =>{
const {id} = useParams()
const dispatch = useDispatch()
//const navigate = useNavigate()

useEffect(()=>{
    dispatch(getVideogameById(id))
}, [dispatch, id])

const videogame = useSelector(state=>state.videogame)

    return (<div>
        <h1>DETAIL</h1>
        <h2>Name: {videogame.name}</h2>
    </div>
    )
}

export default Detail