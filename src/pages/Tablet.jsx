import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Stories from '../components/Stories'

const Tablet = () => {
  return (
    <div className="tablet">
        <h1>TABLET</h1>
        <Header parent="tablet"/>
        <Stories />
    </div>
  )
}

export default Tablet
