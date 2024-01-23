import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsappIcon from "./components/WhatsappIcon";
import BackToTopButton from "./components/BackToTopButton";
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import Education from "./routes/Education.jsx";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";

export default function App() {
  
  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //     upadateLoad(false);
  //     }, 1200);

  //     return () => clearTimeout(timer);
  // }, []);

  return (

  <div className="container">
    <Router>
      <Header/>
      <Routes>
        <Route path= "/" element= {<Home/>}/>
        <Route path= "/home" element= {<Home/>}/>
        <Route path= "/portfolio" element= {<Home/>}/>
        <Route path= "/about" element= {<About/>}/>
        <Route path= "/education" element= {<Education/>}/>
      </Routes>
      <section id="icons-rodape">
        <WhatsappIcon />
        <BackToTopButton />
      </section>
      {/* <Footer /> */}
    </Router>
  </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
