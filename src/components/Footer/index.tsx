import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => (
	<footer className="mt-32">
		<p className="text-center text-2xl">
			Feito com <FontAwesomeIcon className='text-primary' icon={faHeart} /> por Paulo
		</p>
	</footer>
);
