

import { Amplify } from "aws-amplify"
import { RouterProvider } from 'react-router-dom';
import './App.css'
import React from "react";
import router from "./router";
const envVariable = import.meta.env

console.log(envVariable)

Amplify.configure({
  Auth:{
    Cognito:{
      userPoolId: envVariable.VITE_USER_POOL_ID,
      userPoolClientId: envVariable.VITE_USER_POOL_CLIENT_ID,
      signUpVerificationMethod:"code",
      loginWith: {
        oauth:{
          redirectSignIn: [envVariable.VITE_REDIRECT_SIGN_IN],
          redirectSignOut: [envVariable.VITE_REDIRECT_SIGN_OUT],
          domain: envVariable.VITE_DOMAIN,
          scopes: [envVariable.VITE_SCOPES],
          responseType: "code",

        }
      }
    },

  }
})


function App() {


  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  )
}

export default App
