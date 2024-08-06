
import { signOut } from "aws-amplify/auth"
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();



  return (<>
    <h1>Landing Page </h1>
    <button
        id="logout-button"
        onClick={()=> signOut().then( _ => navigate('/') ) }
      >
        Log out
      </button>
  </>)
}

export default Landing
