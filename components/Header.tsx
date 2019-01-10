import Link from 'next/link';
import Head from './Head';
import '../styles/main.scss';

const Header = () => (
	<header className="fullscreen">
		<div className="about-button">
			<button>About</button>
		</div>
		<Head />
	</header>
);

export default Header;
