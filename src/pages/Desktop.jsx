import React from 'react'
import '../styles/Desktop.css' // style sheet for desktop
import Header from '../components/Header'
import Stories from '../components/Stories'
import CreatePost from '../components/CreatePost'

const Desktop = () => {


  return (
    <div className="desktop">
      <h1>DESKTOP</h1>
      <Header parent="desktop"/>   
      <Stories parent='desktop'/>
      <CreatePost />
    </div>
  )
}

export default Desktop
