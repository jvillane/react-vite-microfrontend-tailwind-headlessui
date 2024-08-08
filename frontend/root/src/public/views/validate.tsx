

import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "aws-amplify/auth"
import { Hub } from "aws-amplify/utils"
import { useEffect } from "react";
const Validate = () => {
  const navigate = useNavigate();
  useEffect(() => {

    Hub.listen("auth", async ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          const user = await getCurrentUser();
          navigate("/landing");
          console.log(user.username);
          break;
        case "signInWithRedirect_failure":
          // handle sign in failure
          break;
        case "customOAuthState":
          const state = payload.data; // this will be customState provided on signInWithRedirect function
          console.log(state);
          break;
      }
    });
  })


  return (<>
    <h1>Validating </h1>
  </>)
}

export default Validate
