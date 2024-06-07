import React, { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList.component";
import SearchForm from "../components/SearchForm/SearchForm.component";
import Pagination from "../components/Pagination/Pagination.component";

const LandingPage = () => {
	const BASE_URL = "https://api.themoviedb.org/3";
	const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage] = useState(4); // Set the number of movies per page

	const fetchMovies = async (searchKey) => {
		try {
			const type = searchKey
				? `search/movie?query=${searchKey}&api_key=${apiKey}`
				: `trending/movie/week?api_key=${apiKey}`;
			setLoading(true);
			setError(false);
			const response = await fetch(`${BASE_URL}/${type}`);

			const data = await response.json();
			setMovies(data.results);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false); // Set loading to false after fetch
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	// Get current movies
	const indexOfLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
	const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	let content = "";
	if (loading) {
		content = <div className='loading' />;
	} else if (error) {
		content = <div style={{ textAlign: "center" }}>Error: Something else went wrong...</div>;
	} else {
		content = <MoviesList movies={currentMovies} />;
	}

	return (
		<>
			<SearchForm handleSearch={fetchMovies} />
			{content}
			<Pagination
				totalPages={Math.ceil(movies.length / moviesPerPage)}
				currentPage={currentPage}
				onPageChange={paginate}
			/>
		</>
	);
};

export default LandingPage;
