import React, { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList.component.jsx";

const LandingPage = () => {
	const BASE_URL = "https://api.themoviedb.org/3";
	const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchMovies = async (searchkey) => {
		try {
			const type = searchkey
				? `search/movie?query=${searchkey}&api_key=${apiKey}`
				: `trending/movie/week?api_key=${apiKey}`;
			const response = await fetch(`${BASE_URL}/${type}`);

			const data = await response.json();
			setMovies(data.results);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			<MoviesList movies={movies} />
		</>
	);
};

export default LandingPage;
