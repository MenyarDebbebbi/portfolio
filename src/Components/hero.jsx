import { Typewriter } from 'react-simple-typewriter';
import HeroImage from './HeroImage';
const Hero = () => {
	return (
		<div className="section w-100 flex justify-between items-center relative">
			<div className="w-1/2 px-20 text-white">
				<div className="text-3xl h-20">
					<Typewriter
						cursor
						cursorStyle="_"
						loop={0}
						words={["I'm Menyar Debbebi"]}
					/>
				</div>
				<p>
					I graduated as an information systems developer at the Higher Institute of Technological
					Studies of Sfax, where I followed specialized training in the development of information
					systems. I have been working in the programming and web design industry for five years. I
					have obtained several distinctions in programming competitions. I have provided in-depth
					training to over 250 candidates in programming competitions.
				</p>
			</div>
			<div className="absolute right-0 top-0 z-0">
				<HeroImage />
			</div>

			<div className="arrow">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default Hero;
