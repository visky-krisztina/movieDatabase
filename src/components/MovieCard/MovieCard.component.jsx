import { Link } from "react-router-dom";
import "./MovieCard.styles.css";

const MovieCard = ({ id, title, image, rating }) => {
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

	return (
		<div className='movieCard-container'>
			<div className='img-container'>
				{image ? (
					<Link to={`/movie/${id}`}>
						<img className='img' src={`${IMAGE_PATH}${image}`} alt={title} />
					</Link>
				) : null}
			</div>
			<div className='footer'>
				<h4>{title}</h4>
				<h5>Rating: {rating}</h5>
			</div>
		</div>
	);
};

export default MovieCard;
