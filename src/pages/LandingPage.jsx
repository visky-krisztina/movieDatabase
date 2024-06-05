import React, { useEffect, useState } from "react";

const LandingPage = () => {
	const BASE_URL = "https://api.themoviedb.org/3";
	const apiKey = "43a7ea280d085bd0376e108680615c7f"; //process.env.REACT_APP_MOVIE_API_KEY - de sehogy sem mukodik igy;

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
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return <div>{movies.length > 0 && movies.map((movie) => <div key={movie.id}>{movie.title}</div>)}</div>;
};

export default LandingPage;
