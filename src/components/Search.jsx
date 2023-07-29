import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/app_context'

const Search = () => {

    let { showSearch, setShowSearch, search, setSearch, characters } = useContext(AppContext)

    const [ clicked, setClicked ] = useState(false)

    useEffect(() => {
        console.log(clicked)
        console.log(search)
    }, [clicked])

    useEffect(() => {
        characters.filter((character) => {
            character.name.includes(search) && console.log(character.name)
        })
    }, [search])

  return (
    <div className='searchPopUp' onClick={() => setClicked(false)}>
        <div className="top">
            <p className='back' onClick={() =>setShowSearch(!showSearch)}>X</p>
            <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' className='searchIcon' style={{ display: clicked && 'none'}} />
            <input type='text' placeholder='Search Spacebook'
            onClick={() => setClicked(true)}
            onChange={(e) => setSearch(e.target.value)}
            value={search}/>
        </div>

        <div className="results">
            { !search ? 
            <p className=''>No Recent Searches</p> :
            characters.map((character) => {
                if(character.name.includes(search)) return (
                    <div className="searchItem">
                        <img src={character.image} alt="" />
                        <div className="right">
                            <h5>{character.name}</h5>
                            <p>Friend</p>
                        </div>
                    </div>
                )
            })

            }

        </div>

    </div>
  )
}

export default Search
