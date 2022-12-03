import React from 'react'
import {Article, Brand, CTA, Features, Navbar} from "./components";
import {Blog, Feature,Footer, Header, Possibility,WhatGPT3,WhatGT3 } from "./container"
import "./App.css";


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App