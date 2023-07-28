import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'

const Desktop = () => {

  

  return (
    <div className="desktop">
      <h1>DESKTOP</h1>
      <Header parent="desktop"/>
      <Stories parent='desktop'/>
    </div>
  )
}

export default Desktop
