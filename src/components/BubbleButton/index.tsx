import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BubbleButton = ({ href, icon }: buttonProp) => {
	return (
		<a
			href={href}
			target="_blank"
			className="text-3xl p-4 bg-black hover:bg-primary transition-colors flex justify-center align-center text-white rounded-full"
		>
			<FontAwesomeIcon icon={icon} />
		</a>
	);
};
