import React, { useState } from 'react'

const Stories = () => {


  const [ underline, setUnderline ] = useState(true)
  const tempArray = [1,2,3,4,5,6,7,8,9,10]

  const toggleLine = () => {
    setUnderline(!underline)
  }

  return (
    <div className='storiesContainer'>

        <div className="options">
          <div className={underline && 'underline'} onClick={toggleLine}>Stories</div>
          <div className={!underline && 'underline'} onClick={toggleLine}>Reels</div>
        </div>

        <hr/>

        <div className="stories">
          { tempArray.map((element, index) => {
            return (
              <div className="story">
                <img src='https://img.freepik.com/premium-vector/grey-alien-character-illustration-avatar-profile-picture_19361-359.jpg?w=2000' alt='profile pic' className='avatar'/>
                <h3>temp pic</h3>
                <p>{index+1}</p>
              </div>
            )
          }) }
        </div>
      
    </div>
  )
}

export default Stories
