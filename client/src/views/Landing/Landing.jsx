import {useNavigate} from 'react-router-dom';

const Landing = () =>{
    const navigate = useNavigate()
const access = () =>{
    navigate('/home')
}

    return (
        <div>
            <p>Epic Plays</p>
            <button onClick={access}>Iniciar</button>
        </div>
    )
    }
    
    export default Landing