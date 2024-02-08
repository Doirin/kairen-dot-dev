import './css/App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GalleryModal from "./pages/GalleryModal";
import Socials from "./pages/Socials";
import NoPage from "./pages/NoPage";
import Info from "./pages/Info";
import './css/Elements.css'
import './css/Properties.css'
import './css/Animations.css'
import Gallery from "./pages/Gallery";
import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebaseConfig";

function App() {
    initializeApp(firebaseConfig);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            errorElement: <NoPage/>,
            children: [
                {
                    path:"",
                    element: <Home/>,
                },
                {
                    path:"info",
                    element: <Info/>
                },
                {
                    path:"gallery",
                    element: <Gallery/>,
                    children: [
                        {
                            path: ":galleryName",
                            element: <GalleryModal/>
                        }
                    ]
                },
                {
                    path:"socials",
                    element: <Socials/>
                },
            ]
        }
    ])
  return (
      <RouterProvider router={router} />
  );
}

export default App;