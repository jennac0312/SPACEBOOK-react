import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'

const FriendsList = () => {

  let { grabRandomCharacters } = useContext(AppContext) 

  let friends = grabRandomCharacters(9)

  return (
    <div className="friendsList">
      <div className="title">
        <div className="top">
          <p className='bold'>Friends</p>
          <p className='all'>See all friends</p>
        </div>
        <p className='mutes'>1,730 (119 mutual)</p>
      </div>
      <div className="pics">
        { friends.map((friend) => {
          return (
            <div className="container">
              <img src={friend.image}/>
              <p className="name">{friend.name}</p>
              <p className="mutuals">3 mutual friends</p>
            </div>
          )
        }) }
      </div>

    </div>
  )
}

export default FriendsList
