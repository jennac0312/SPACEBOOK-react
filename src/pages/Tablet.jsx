import React, { useContext } from 'react'
import '../styles/Tablet.css' //style for tablet
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Stories from '../components/Stories'
import { AppContext } from '../context/app_context'
import CreatePost from '../components/CreatePost'
import Search from '../components/Search'
import Feed from '../components/Feed'
import Profile from './Profile'

const Tablet = () => {
  let { grabCharacters, characters, mainProfile, showSearch, clickedProfile } = useContext(AppContext)

  let friends = grabCharacters(10)

  console.log(friends)
  console.log(mainProfile)
  console.log('SHOW SEARCH',showSearch)

  return (
    <div className="tablet">
      <Routes>
        {/* <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile} parent="tablet"/>}/> */}
      </Routes>
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
