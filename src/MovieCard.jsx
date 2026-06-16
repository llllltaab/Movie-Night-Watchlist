function MovieCard(props) {
    let text = "";
    let label = "";
    
    if(props.movie.watched) {
        text = "Watched"
        label = "Mark as Unwatched"
    } else {
        text = "Not watched yet"
        label = "Mark as Watched"
    }
    
    return (
        <div>
            {`${props.movie.title} ${props.movie.genre} ${props.movie.year} ${text}`}
            <button onClick={() => {props.onToggle()}}>{label}</button>
        </div>
    )
}

export default MovieCard;