import { Form } from "react-router-dom";
import { useState } from "react";
import "./SearchForm.styles.css";

const SearchForm = ({ handleSearch }) => {
	const [searchKey, setSearchKey] = useState("");

	const searchMovies = (e) => {
		e.preventDefault();

		handleSearch(searchKey);
	};
	return (
		<div className='search-container'>
			<Form className='form' onSubmit={searchMovies}>
				<input
					type='search'
					className='form-input'
					value={searchKey}
					placeholder='Film neve'
					onChange={(e) => setSearchKey(e.target.value)}
				/>
			</Form>
		</div>
	);
};

export default SearchForm;
