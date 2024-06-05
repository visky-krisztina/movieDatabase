import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Movie.styles.css";

//https://api.themoviedb.org/3/movie/614933?language=en-US&api_key=43a7ea280d085bd0376e108680615c7f#
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
	const { id } = useParams();
	const BASE_URL = "https://api.themoviedb.org/3";
	const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
	const [theMovie, setTheMovie] = useState("");
	const [error, setError] = useState(null);

	const getMovie = async () => {
		try {
			const response = await fetch(`${BASE_URL}/movie/${id}?language=en-US&api_key=${apiKey}`);
			const data = await response.json();
			console.log(data);
			setTheMovie(data);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		getMovie();
	}, []);
	const { vote_average, poster_path, overview, release_date, title, budget } = theMovie;

	return (
		<>
			<div className='movie'>
				<img className='the-movie-img' src={`${IMAGE_PATH}${poster_path}`} alt={title} />{" "}
				<div className='movie-info'>
					<p>
						<span className='movie-data'>Name :</span> {title}
					</p>
					<p>
						<span className='movie-data'>Average vote:</span> {vote_average}
					</p>
					<p>
						<span className='movie-data'>Info:</span> {overview}
					</p>
					<p>
						<span className='movie-data'>Release date :</span> {release_date}
					</p>
					<p>
						<span className='movie-data'>Budget :</span> {budget}
					</p>
					<Link to='/' className='btn'>
						back home
					</Link>
				</div>
			</div>
		</>
	);
};

export default Movie;
