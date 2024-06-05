import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component.jsx";

const HomeLayout = () => {
	const navigation = useNavigation();
	//console.log(navigation);
	const isPageLoading = navigation.state === "loading";
	return (
		<>
			<Navbar />
			<section className='page'>{isPageLoading ? <div className='loading' /> : <Outlet />}</section>
		</>
	);
};
export default HomeLayout;
