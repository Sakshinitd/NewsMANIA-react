import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter, Routes,Route} from 'react-router';

export default class App extends Component {
  
  render() {
    return (
    
      <div>
      <BrowserRouter basename="/NewsMANIA">
      
      <Navbar/>
      <Routes>
      <Route path="/NewsMANIA" element={<News key="general" country="in" pagesize={6} category="general"/>}/>
      <Route path="/business" element={<News key="business" country="in" pagesize={6} category="business"/>}/>
      <Route path="/entertainment" element={<News key="entertainment" country="in" pagesize={6} category="entertainment"/>}/>
      <Route path="/general" element={<News key="general" country="in" pagesize={6} category="general"/>}/>
      <Route path="/sports" element={<News key="sports" country="in" pagesize={6} category="sports"/>}/>
      <Route path="/technology" element={<News key="technology" country="in" pagesize={6} category="technology"/>}/>
      <Route path="/health" element={<News key="health" country="in" pagesize={6} category="health"/>}/>
      <Route path="/science" element={<News key="science" country="in" pagesize={6} category="science"/>}/>

      </Routes>
      </BrowserRouter>
        
        

      
       
      </div>
      
    )
  }
}



