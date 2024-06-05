import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import "./styles/ErrorPage.styles.css";

const ErrorPage = () => {
	const error = useRouteError();
	if (error.status === 404) {
		return (
			<div className='error-container'>
				<div>
					<img className='error-img' src={img} alt='not found' />
					<h3>Ohh! </h3>
					<p>We can't seem to find the page you're looking for..</p>
					<Link to='/'>back home</Link>
				</div>
			</div>
		);
	}
	return (
		<div className='error-container'>
			<div>
				<h3>something went wrong</h3>
			</div>
		</div>
	);
};

export default ErrorPage;
