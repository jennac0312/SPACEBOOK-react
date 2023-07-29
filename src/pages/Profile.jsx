import React, { useContext } from 'react'
import Header from '../components/Header'
import { AppContext } from '../context/app_context'
import Search from '../components/Search'

const Profile = ( { parent, profile} ) => {

    console.log('PROFILE PARENT:', parent)
let { showSearch } = useContext(AppContext)
    const mobile = () => {
        return (
            
            <div className='mobileProfileContainer'>
                <h1>{parent}</h1>
                <h1>MOBILE PROFILE</h1>
                <p>{profile.name} profile</p>
                <img src={profile.image}/>
            </div>
        )
    }
    const tablet = () => {
        return (
            <>
            <Header parent="tablet"/>
            {showSearch && <Search />}
            <div className='tabletProfileContainer'>
                <h1>{parent}</h1>
                <h1>TABLET PROFILE</h1>
                <p>{profile.name} profile</p>
                <img src={profile.image}/>
            </div>
            </>
        )
    }
    const desktop = () => {
        return (
            <>
            <Header parent="desktop"/>
            <div className='desktopProfileContainer'>
                <h1>{parent}</h1>
                <h1>DESKTOP PROFILE</h1>
                <p>{profile.name} profile</p>
                <img src={profile.image}/>
            </div>
            </>
        )
    }
  
    if( parent === "mobile" ) return mobile()
    if( parent === "tablet" ) return tablet()
    if( !parent ) return desktop() // dont know where parent is being passed
}

export default Profile
