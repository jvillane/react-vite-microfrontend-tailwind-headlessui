import {
  createBrowserRouter,
} from "react-router-dom";
import Landing from "./private/views/landing";
import Login from "./public/views/login";
import Validate from "./public/views/validate";


const router: ReturnType<typeof createBrowserRouter>  = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/landing",
    element: <Landing />
  },
  {
    path: "/validate",
    element: <Validate />
  },
]);

export default router
