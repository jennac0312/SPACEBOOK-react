import React, { useContext } from 'react'
import '../styles/Tablet.css' //style for tablet
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Stories from '../components/Stories'
import { AppContext } from '../context/app_context'
import CreatePost from '../components/CreatePost'
import Search from '../components/Search'
import Feed from '../components/Feed'

const Tablet = () => {
  let { grabCharacters, characters, mainProfile, showSearch } = useContext(AppContext)

  let friends = grabCharacters(10)

  console.log(friends)
  console.log(mainProfile)

  return (
    <div className="tablet">
        {/* <h1>TABLET</h1> */}
        <Header parent="tablet"/>
        { showSearch && <Search />}
        <Stories />
        <CreatePost />
        <Feed />
    </div>
  )
}

export default Tablet
