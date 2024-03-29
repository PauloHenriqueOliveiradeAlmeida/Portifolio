import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Button = ({ href, icon, text, variation = 'primary', download = false }: buttonProp) => {
	const buttonVariation = variation === 'secondary' ?
	'bg-slate-700 text-white hover:bg-primary' :
		`bg-${variation} text-white hover:bg-primary`

	return (
		<a
			href={href}
			className={`w-full p-4 rounded-2xl transition-colors text-center ${buttonVariation}`}
		download={download} target='_blank'>
			{text} <FontAwesomeIcon icon={icon} />
		</a>
	);
};
