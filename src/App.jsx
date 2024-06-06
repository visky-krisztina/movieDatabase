import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, AboutPage, LandingPage, ErrorPage, Movie } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "movie/:id",
				element: <Movie />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
