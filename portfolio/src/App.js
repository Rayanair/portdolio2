import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Page/HomePage';
import Portfolio from './Page/Portfolio';
import Cv from './Page/Cv';

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/"
  },
  {
    element: <Portfolio />,
    path: "/Portfolio"
  },
  {
    element: <Cv/>,
    path: "/Cv"
  },

]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
