import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [ windowWidth, setWindowWidth ] = useState(1000)

    // window.onresize = () => {
    //     console.log('window is resizing')
    //     setWindowWidth(window.innerWidth)

    //     console.log(windowWidth)
    // }

    window.addEventListener('resize', () => {
        console.log('window is resizing')
        console.log(window.screen.availWidth)
        // setWindowWidth(screen.width)

        // console.log(windowWidth)
    })

    // ideal data structure
    const person = {
        profilePic: 'rick and morty api pic',
        name: "name generate api/// or morty api",
        posts: [
            {
                text: 'random quotes',
            }
        ],
        homePlanet: 'nasa pics for'
    }
    
    // JENNA API-----------------------------------
    const [ characters, setCharacters ] = useState([])

    const fetchRick = async (URL) => {
        const response = await axios.get(URL)
        // console.log(response)
        const data = response.data
        // console.log(data)
        URL = response.data.info.next
        // console.log(URL)

        // console.log([...characters], data)

        if(URL){
            URL = response.data.info.next
            // console.log("url exists")
            // console.log(characters)
            fetchRick(URL)
        }
    }

    fetchRick('https://rickandmortyapi.com/api/character?page=38')



    // --------------------------------------------


    // DOUGS API------------------------------------
    // --------------------------------------------

    // ANN API------------------------------------
    // --------------------------------------------











    return(
        <AppContext.Provider value={{
            windowWidth
        }}>
            {props.children}
        </AppContext.Provider>

    )
}

export default AppContextProvider