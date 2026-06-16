function MovieCard({ movie }) {
    let text = "";
    
    if(movie.watched) {
        text = "Watched"
    } else {
        text = "Not watched yet"
    }
    
    return (
        <div>
            {`${movie.title} ${movie.genre} ${movie.year} ${text}`}
        </div>
    )
}

export default MovieCard;