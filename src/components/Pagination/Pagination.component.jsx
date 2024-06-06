import React from "react";
import "./Pagination.styles.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
					<button
						className='page-link'
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1} // Disable the button if it's the first page
					>
						{" "}
						Previous
					</button>
				</li>
				{pageNumbers.map((number) => (
					<li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
						<button onClick={() => onPageChange(number)} className='page-link'>
							{number}
						</button>
					</li>
				))}
				<li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
					<button
						className='page-link'
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages} // Disable the button if it's the last page
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
