import { useNavigate } from "react-router-dom"

const Landing = () =>{
const navigate = useNavigate()
const access = ()=>{
    navigate("/home")
}


    return (<div>
        <h1>Epic Plays</h1>
        <button onClick={access}>comenzar</button>
        </div>
    )
}

export default Landing