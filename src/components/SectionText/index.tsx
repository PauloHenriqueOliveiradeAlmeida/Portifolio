import { Section } from '../Section';

interface SectionProp {
	image: string;
	title: string;
	id?: string;
	children: React.ReactNode;
}

export const SectionText = ({ image, title, id, children }: SectionProp) => (
	<Section image={image} title={title} id={id}>
		<div className='text-base md:text-2xl space-y-4'>
			{children}
		</div>
	</Section>
);
