// import Node Modules
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Theme from './Theme.jsx';
// import Views
import Home from "./views/Home"
import Contact from "./views/Contact"
import Projects from "./views/Projects.js"
// import globals
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import './App.css'


function App() {

  const [theme, setTheme] = useState(true);
  const isDarkTheme = theme === false

  return (<>
    <Theme isDarkTheme={isDarkTheme}>
      <div style={{display: 'flex',flex: 'auto', flexDirection: 'column',minHeight: 0}}>
        <Header isDarkTheme={isDarkTheme} theme = {theme} setTheme={setTheme}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
        <Footer/>
      </div>
    </Theme>
</>)
}

export default App
