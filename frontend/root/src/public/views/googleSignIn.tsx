
import { signInWithRedirect } from "aws-amplify/auth"

interface Props {
  textButton?: string
}

const GoogleSignIn = ({textButton = "Inicia sesión con Google"}: Props) => {

  const GOOGLE_PROVIDER = "Google"


  return (<>
    <button color='inherit'

      onClick={() => { signInWithRedirect({ provider: GOOGLE_PROVIDER})}}>
        {textButton}
    </button>
  </>
  );
}
export default GoogleSignIn;
