import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type BubbleButtonProps = {
	href: string;
	icon: IconDefinition;
};

export const BubbleButton = ({ href, icon }: BubbleButtonProps) => {
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
