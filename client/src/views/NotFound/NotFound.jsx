import { useNavigate } from "react-router-dom"

const NotFound = () =>{
    
    const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }
    
        return (<div>
            <button onClick={handleBackClick}>Go Back</button>
            <h1>NOT FOUND!</h1>
            {/* quitar el h1 y poner la imagen de assets */}
            </div>
        )
    }
    
    export default NotFound