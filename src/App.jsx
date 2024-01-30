import "./styles/App.scss";

import React from 'react';
import ReactDOM from 'react-dom/client';

import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import WhatsappIcon from "./components/WhatsappIcon";
import About from './routes/About.jsx';
import Education from "./routes/Education.jsx";
import Home from './routes/Home.jsx';
import NotFound from './routes/NotFound.jsx';

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

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
        <Route path= "*" element= { <NotFound/> }/>
      </Routes>
      <section id="icons-rodape">
        <WhatsappIcon />
        <BackToTopButton />
      <Footer />
      </section>
    </Router>
  </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
