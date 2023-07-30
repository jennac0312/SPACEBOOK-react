import React, { useContext } from 'react'
import '../styles/Mobile.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import { AppContext } from '../context/app_context'
import CreatePost from '../components/CreatePost'

const Mobile = () => {

    // let { characters } = useContext(AppContext)
    // console.log(...characters)
  return (
    <div className="mobile">
      {/* 
      {characters.map((character) => {
        return <li>{character.name}</li>
      })}  */}
      <div className="topHalf">
        <Header parent="mobile"/>
        <CreatePost parent="mobile"/>
      </div>
      <Routes>
        <Route /> 
        <Route /> 
      </Routes>

    </div>
  )
}

export default Mobile
