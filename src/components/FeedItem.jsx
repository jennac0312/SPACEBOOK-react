import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'

const FeedItem = ( {friend, index} ) => {

    let { mainProfile } = useContext(AppContext)

    const hide = (what) => {
        // console.log(what)
        what.classList.add('hide')
    }


  return (
    <div className={`friendPost post${index}`}>
      <div className="top">
        <div className="left">
            <img src={friend.image} alt="" srcset="" />
            <div className="">
                <h4>{friend.name}</h4>
                <p className='globe'>7h 🌍</p>
            </div>
        </div>

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
        <div className="top">
            <p>😂2</p>
            <p>2💬</p>
        </div>
        <hr />

        <div className="options">
            <p>👍 Like</p>
            <p>💬 Comment</p>
            <p>➦ Share</p>
        </div>

        <hr />

        <div className="comments">
            <p className='viewMore'>View more comments</p>

            <div className="commentContainer">
                <img src={friend.image} alt="" srcset="" />
                <div className="comment">
                    <p className="name">{friend.name}</p>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

        <div className="addComment">
            <img src={mainProfile.image} alt="" srcset="" />
            <input type="text" placeholder='Write a comment...'/>
        </div>

      </div>
    </div>
  )
}

export default FeedItem
