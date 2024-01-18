import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Socials from "./pages/Socials";
import NoPage from "./pages/NoPage";
import Info from "./pages/Info";
import './css/Home.css'
import './css/Elements.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="socials" element={<Socials />}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;