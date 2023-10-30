import { useState } from "react"



const searchMovie = () => {
    const [search, setSearch] = useState("")
    const handleSubmits = (event) => {
        event.preventDefault()
    console.log("Recherche lancée")
    }
    const handleInputChange = (searchInput) => {
        setSearch(searchInput)
        console.log(searchInput)
    }
    return (

        <>
        
        <h1>Recherche</h1>
        <form onSubmit={handleSubmits}>
            <input type="text" name="search" onChange={(e) => handleInputChange(e.target.value)} placeholder="Chercher un film"/>
            <button type="sbmit" >Rechercher</button>
            
        </form>

        </>

    )


}