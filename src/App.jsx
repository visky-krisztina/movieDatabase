import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, AboutPage, LandingPage, ErrorPage, Movie, SinglePageError } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				errorElement: <SinglePageError />,
				element: <LandingPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "movie",
				element: <Movie />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
