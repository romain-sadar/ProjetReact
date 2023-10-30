const MoviesList = (movies) => {
    return (
        <>
        <h2 className="special-title">Ma Liste</h2>
        <ul>
            {
                movies.map((movie) => (
                    <li className="movie-title">
                        (movie)
                    </li>
                ))
            }
        </ul>
        
        </>
    )
}


export default MoviesList;