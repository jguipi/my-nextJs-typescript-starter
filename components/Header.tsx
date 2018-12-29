import Link from 'next/link';
import Head from './Head';
import '../styles/styles.scss';

const Header = () => (
	<header>
		<div className="fullscreen">
			<div className="about-button">
				<button>
          About
        </button>
			</div>
			<Head />
		</div>
	</header>
);

export default Header;
