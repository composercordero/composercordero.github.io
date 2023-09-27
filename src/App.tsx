// import Node Modules
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Theme from './Theme.jsx';
import { GlobalStyles } from './Theme.jsx';

// import Views
import Home from "./views/Home"
import Contact from "./views/Contact"
import Projects from "./views/Projects.js"
// import globals
import Header from "./components/global/Header";
import ColorSelector from './components/global/colorSelector.js';
import Footer from "./components/global/Footer";

import './App.css'

function App() {

  const [theme, setTheme] = useState(true);
  const isDarkTheme = theme === false
  const [currentColor, setCurrentColor] = useState({
    100: "#ffcce6",
    200: "#ff99cc",
    300: "#ff66b3",
    400: "#ff3399",
    500: "#ff0080",
    600: "#cc0066",
    700: "#99004d",
    800: "#660033",
    900: "#33001a"}
  );

  const lightTheme = {
    colors: {
        body: '#fff',
        text: '#444',
        white: '#fff',
        accentColor: {
            100: currentColor[100],
            200: currentColor[200],
            300: currentColor[300],
            400: currentColor[400],
            500: currentColor[500],
            600: currentColor[600],
            700: currentColor[700],
            800: currentColor[800],
            900: currentColor[900]}
    },
    fonts: ['Poppins', 'sans-serif'],
    fontSizes:{
        xs: '0.875rem',
        s: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '3rem',
        xxl: '4.5rem',
        xxxl: '6rem',
    },
    fontWeights:{
        light: 200,
        normal: 300,
        bold: 500,
        bolder: 700,
    },
  }
  
  const darkTheme = {
    colors: {
        body: '#1c1c1c',
        text: '#ffffff',
        white: '#fff',
        accentColor: {
          100: currentColor[100],
          200: currentColor[200],
          300: currentColor[300],
          400: currentColor[400],
          500: currentColor[500],
          600: currentColor[600],
          700: currentColor[700],
          800: currentColor[800],
          900: currentColor[900]}
    },
    fonts: ['Poppins', 'sans-serif'],
    fontSizes:{
        xs: '0.875rem',
        s: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '3rem',
        xxl: '4.5rem',
        xxxl: '6rem',
    },
    fontWeights:{
        light: 200,
        normal: 300,
        bold: 500,
        bolder: 700,
    },
  }

  return (<>
    <Theme isDarkTheme={isDarkTheme} lightTheme={lightTheme} darkTheme={darkTheme}>
      <GlobalStyles />
      <div style={{display: 'flex',flex: 'auto', flexDirection: 'column',minHeight: 0}}>
        <Header theme = {theme} setTheme={setTheme}/>
        <ColorSelector setCurrentColor={setCurrentColor} />
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
