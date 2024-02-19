import "./styles/App.scss";

import React from 'react';
import { Outlet, } from "react-router-dom";

import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import WhatsappIcon from "./components/WhatsappIcon";


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
      <Header/>
    <Outlet/>
      <section id="icons-rodape">
        <WhatsappIcon />
        <BackToTopButton />
      <Footer />
      </section>
  </div>
  );
}
