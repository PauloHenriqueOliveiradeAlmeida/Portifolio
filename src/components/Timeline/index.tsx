interface TimelineProps {
	office: string;
	company?: string;
	startDate: string;
	endDate: 'current' | string;
	location: string;
	children: React.ReactNode;
}

export const Timeline = ({ office, company, startDate, endDate, location, children }: TimelineProps) => (
	<div className="text-white relative mb-8 p-4 before:absolute before:-left-1.5 before:top-1/4 before:block before:w-3 before:h-3 before:rounded-full before:bg-primary">
		<h2 className="text-xl font-bold md:text-2xl">{office}</h2>
		<p className="md:text-xl">
			{company} | {startDate} - {endDate === 'current' ? 'O momento' : endDate} | {location}
		</p>
		<hr className="mb-4 w-3/4 h-1 bg-white rounded-md" />
		<div className="md:text-lg">{children}</div>
	</div>
);
