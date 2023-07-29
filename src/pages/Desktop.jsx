import React, { useContext } from 'react'
import '../styles/Desktop.css' // style sheet for desktop
import Header from '../components/Header'
import Stories from '../components/Stories'
import CreatePost from '../components/CreatePost'
import { AppContext } from '../context/app_context'
import Search from '../components/Search'
import Feed from '../components/Feed'

const Desktop = () => {

  let { grabCharacters, characters, mainProfile, showSearch, clickedProfile } = useContext(AppContext)

  console.log('SHOW SEARCH',showSearch)

  return (
    <div className="desktop">
      {/* <h1>DESKTOP</h1> */}
      <Header parent="desktop"/>
        { showSearch && <Search />}
        <Stories />
        <CreatePost />
        <Feed />
    </div>
  )
}

export default Desktop
