import React from 'react'

const Header = ( {parent, windowWidth} ) => {

    const mobile = () => {
        return (
          <div>
            <h1>I AM THE HEADER for mobile</h1>
            <h1>{windowWidth}</h1>
          </div>
        )
    } 
    
    const tablet = () => {
        return(
            <div>
                <h1> HEADER TABLET view</h1>
                <h1>{windowWidth}</h1>
            </div>
        )
    }

    const desktop = () => {

    }


    if( parent ==="mobile" ){
        return mobile()
    }
    if(parent ==="tablet"){
        return tablet()
    }
}

export default Header
