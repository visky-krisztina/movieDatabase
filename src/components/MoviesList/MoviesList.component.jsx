import MovieCard from "../MovieCard/MovieCard.component.jsx";
import "./MoviesList.styles.css";

const MovieList = ({ movies }) => {
	console.log("Movies Data:", movies);
	if (!movies || movies.length == 0) {
		return <h4 style={{ textAlign: "center" }}>No matching movies found..</h4>;
	}
	const formattedMovies = movies.map((item) => {
		const { vote_average, poster_path, id, overview, release_date, title } = item;
		return {
			id: id,
			title: title,
			image: poster_path,
			rating: vote_average,
			overview: overview,
			date: release_date,
		};
	});
	return (
		<div className='movies-container'>
			{formattedMovies.map((item) => {
				return <MovieCard key={item.id} {...item} />;
			})}
		</div>
	);
};

export default MovieList;
