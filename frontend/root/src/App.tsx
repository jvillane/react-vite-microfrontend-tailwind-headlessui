

import { Amplify } from "aws-amplify"
import { RouterProvider } from 'react-router-dom';
import './App.css'
import React from "react";
import router from "./router";
const envVariable = import.meta.env

Amplify.configure({
  Auth:{
    Cognito:{
      userPoolId: envVariable.VITE_USER_POOL_ID,
      userPoolClientId: envVariable.VITE_USER_POOL_CLIENT_ID,
      identityPoolId: envVariable.VITE_USER_POOL_ID,
      signUpVerificationMethod:"code"
    }
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
