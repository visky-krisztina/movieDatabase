import "./styles/AboutPage.styles.css";

const About = () => {
	return (
		<div className='about-container'>
			<h1>Miről is szól ez a kis app?</h1>
			<p>
				Ez egy olyan webalkalmazás, amelynek segítségével filmeket kereshet, és filmekről szerezhet információkat a
				felhasználó. A webalkalmazás adatszolgáltatásaként a TMBDW-t használja. React, CSS és API használata. A főoldal
				a heti trendeket mutatja, a keresővel viszont megkereshető akármilyen film. A film képére kattintva egy új
				oldalon több információ derül ki az adott filmről.
			</p>
		</div>
	);
};
export default About;
