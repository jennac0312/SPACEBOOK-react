import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Stories from '../components/Stories'
import { AppContext } from '../context/app_context'

const Tablet = () => {
  let { grabCharacters, characters } = useContext(AppContext)

  let friends = grabCharacters(300)

  console.log(friends)

  return (
    <div className="tablet">
        <h1>TABLET</h1>
        { friends?.map((friends) => {
          return <li>{friends.name}</li>
        }) }
        <Header parent="tablet"/>
        <Stories />
    </div>
  )
}

export default Tablet
