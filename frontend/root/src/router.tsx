import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "./public/views/login";
import Landing from "./private/views/landing";


const router: ReturnType<typeof createBrowserRouter>  = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/landing",
    element: <Landing />
  },
]);

export default router
