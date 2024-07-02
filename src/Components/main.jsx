import Nav from './nav';
import Hero from './hero';
import Footer from './footer';
import Service from './services';
import Project from './project';
import Seperator from './Seperator';

const main = () => {
	return (
		<div>
			<Nav />
			<Hero />
			<Seperator />
			<Service />
			<Project />
			<Footer />
		</div>
	);
};
export default main;
