import React, { useContext, useState } from 'react'
import { AppContext } from '../context/app_context'
import { Link } from 'react-router-dom'

const FeedItem = ( {friend, index, parent} ) => {

    let { mainProfile, getRandomIntInclusive, time, setClickedProfile } = useContext(AppContext)

    const [ likes, setLikes ] = useState(0)
    
    const hide = (what) => {
        what.classList.add('hide')
    }

    const focusOn = (who) => {
        who.focus() // sets focus to comment clicked
    }

    const mobile = () => {
      return(
        <div className={`friendPost post${index}`}>
      <div className="top">
      <Link to={`/profile/${friend?.name.replaceAll(' ','')}`}>
        <div className="left" onClick={() => setClickedProfile(friend)}>
            <img src={friend?.image} alt="" srcset="" />
            <div className="">
                <h4>{friend?.name}</h4>
                <p className='globe'>{time}h 🌍</p>
                {/* updates everytime state is altered ... */}
            </div>
        </div>
      </Link>

        <div className="right">
            <div className="">
                <img src="https://static.thenounproject.com/png/1380510-200.png" alt="" className="dots" />
            </div>

            <div className="" onClick={() => hide(document.querySelector(`.post${index}`))}>
                <p className='exit'>X</p>
            </div>
        </div>

      </div>

      <div className="textArea">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem sed cumque maiores ducimus similique, dolor officia harum molestiae amet iste consequuntur corporis est error culpa, eligendi ipsam id. Nisi, deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi at, magnam explicabo adipisci iste odit dolore incidunt. Omnis exercitationem architecto animi soluta consectetur excepturi temporibus at facere, velit tenetur optio.</p>
      </div>

      <div className="reactions">
        {likes && 
        <div className="top">
            <p>👍{likes && likes}</p>
            <p>2💬</p>
        </div>
        }
        <hr />

        <div className="options">
            <p onClick={() => setLikes(likes + 1)}>👍 Like</p>
            <p onClick={() => focusOn(document.querySelector(`.input${index}`))}>💬 Comment</p>
            <p>➦ Share</p>
        </div>

        <hr />

        <div className="comments">
            {/* <p className='viewMore'>View more comments</p> */}

            <div className="commentContainer">
                <img src={friend?.image} alt="" srcset="" />
                <div className="comment">
                    <p className="name">{friend?.name}</p>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

        <div className="addComment">
            <img src={mainProfile?.image} alt="" srcset="" />
            <input type="text" placeholder='Write a comment...' className={`input${index}`}/>
        </div>

      </div>
    </div>
      )
    }

    const other = () => {
      return (
        <div className={`friendPost post${index}`}>
          <div className="top">
          <Link to={`/profile/${friend?.name.replaceAll(' ','')}`}>
            <div className="left" onClick={() => setClickedProfile(friend)}>
                <img src={friend?.image} alt="" srcset="" />
                <div className="">
                    <h4>{friend?.name}</h4>
                    <p className='globe'>{time}h 🌍</p>
                    {/* updates everytime state is altered ... */}
                </div>
            </div>
          </Link>
    
            <div className="right">
                <div className="">
                    <img src="https://static.thenounproject.com/png/1380510-200.png" alt="" className="dots" />
                </div>
    
                <div className="" onClick={() => hide(document.querySelector(`.post${index}`))}>
                    <p className='exit'>X</p>
                </div>
            </div>
    
          </div>
    
          <div className="textArea">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem sed cumque maiores ducimus similique, dolor officia harum molestiae amet iste consequuntur corporis est error culpa, eligendi ipsam id. Nisi, deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi at, magnam explicabo adipisci iste odit dolore incidunt. Omnis exercitationem architecto animi soluta consectetur excepturi temporibus at facere, velit tenetur optio.</p>
          </div>
    
          <div className="reactions">
            {likes && 
            <div className="top">
                <p>👍{likes && likes}</p>
                <p>2💬</p>
            </div>
            }
            <hr />
    
            <div className="options">
                <p onClick={() => setLikes(likes + 1)}>👍 Like</p>
                <p onClick={() => focusOn(document.querySelector(`.input${index}`))}>💬 Comment</p>
                <p>➦ Share</p>
            </div>
    
            <hr />
    
            <div className="comments">
                {/* <p className='viewMore'>View more comments</p> */}
    
                <div className="commentContainer">
                    <img src={friend?.image} alt="" srcset="" />
                    <div className="comment">
                        <p className="name">{friend?.name}</p>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
    
            <div className="addComment">
                <img src={mainProfile?.image} alt="" srcset="" />
                <input type="text" placeholder='Write a comment...' className={`input${index}`}/>
            </div>
    
          </div>
        </div>
      )

    }

    return parent === "mobile" ? mobile() : other()
}

export default FeedItem
