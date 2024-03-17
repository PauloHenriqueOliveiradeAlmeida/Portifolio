import { Section } from '../Section';

interface TimelineContainerProps {
	title: string;
	children: React.ReactNode;
	id?: string;
}

export const TimelineContainer = ({ title, children, id }: TimelineContainerProps) => (
	<Section title={title} id={id}>
		<div className="relative before:absolute before:block before:w-0.5 before:h-full before:bg-primary before:rounded-sm">
			{children}
		</div>
	</Section>
);
