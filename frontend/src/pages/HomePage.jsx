import React from 'react'
import Home from '../components/Home/Home'
import Header from '../components/Layout/Header.jsx'

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Home />
    </div>
  )
}

export default HomePage