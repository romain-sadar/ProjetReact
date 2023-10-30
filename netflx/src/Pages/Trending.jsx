import { useEffect, useState } from "react"
import MoviesList from "../Component/MoviesList"

const Trending = () => {

    const [click, setClick] = useState(0)

    useEffect(() => {
        console.log("Trending")
    }, [])

    

    const moviesArray = ["Fast and furious", "Barbie", "Nemo"]
    
    const handleClick = () => {
        console.log('Clicked')
        setClick(click++)
    }


    return (
    <>
        <p>Likes : {click}</p>
        <button onClick={handleClick}>Like</button>
    </>

    )
}

export default Trending;