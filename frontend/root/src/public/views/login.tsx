import { signIn } from "aws-amplify/auth"
import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  interface SignInFormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement
    password: HTMLInputElement
  }

  interface SignInForm extends HTMLFormElement {
    readonly elements: SignInFormElements
  }


  const handleSubmit = async (event: FormEvent<SignInForm>) => {
    event.preventDefault()
    const form = event.currentTarget
    // ... validate inputs
    try{
      const resp = await signIn({
        username: form.elements.email.value,
        password: form.elements.password.value,
      })
      console.log(resp)
      if(resp.isSignedIn){
          navigate("/landing");
      }
    } catch(e) {
      //console.error({ e })
      if(e instanceof Error && e.name === "UserAlreadyAuthenticatedException"){
        navigate("/landing");
      }
    }

  }

  return (<>
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <input type="submit" />
      </form>
    </div>
  </>
  )
}
export default Login
