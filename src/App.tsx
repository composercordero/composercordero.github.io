// import Node Modules
import { useState, useEffect } from 'react';
import {Route,Routes,useNavigate} from 'react-router-dom';
// import Views
import Home from "./views/Home"
import Contact from "./views/Contact"
import Projects from "./views/Projects"
// import antd
import { Layout, ConfigProvider } from 'antd';
// import globals
import Header from "./components/global/Header";

import './App.css'


function App() {

  return (<>
   <ConfigProvider>
   <Layout>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </Layout>
    </ConfigProvider>
</>)
}

export default App
