import { Section } from '../Section';

interface SectionProp {
	image: string;
	title: string;
	id?: string;
	children: React.ReactNode;
}

export const SectionText = ({ image, title, id, children }: SectionProp) => (
	<Section image={image} title={title} id={id}>
		<p className="text-base md:text-2xl">{children}</p>
	</Section>
);
