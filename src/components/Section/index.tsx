import { Slide } from 'react-awesome-reveal';
import { Image } from '../Image';

interface SectionProp {
	image?: string;
	title: string;
	id?: string;
	color?: 'black' | 'white';
	children: React.ReactNode;
}

export const Section = ({ image, title, id, color = 'white', children }: SectionProp) => (
	<Slide cascade triggerOnce>
		<section className={`p-4 sm:p-8 md:p-16 mb-16 text-${color}`} id={id}>
			{image && <Image src={image} alt={`Imagem da seção ${title}`} />}
			<h3 className="mt-4 md:mt-6 text-4xl md:text-6xl text-primary">{title}</h3>
			<hr className={`mb-4 w-3/4 h-1 bg-primary border-none rounded-md`} />
			{children}
		</section>
	</Slide>
);
