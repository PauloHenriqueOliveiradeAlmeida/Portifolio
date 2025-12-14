import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';

export interface ProjectCardProps {
	id: number;
	name: string;
	description: string;
	topics: string[];
	html_url: string;
	homepage: string;
}

export const ProjectCard = ({ id, name, description, topics, html_url, homepage }: ProjectCardProps) => (
	<div className="bg-black p-8 text-white rounded-2xl shadow-md">
		<p className="text-3xl font-bold break-words">{name.replace(/[_-]/g, ' ')}</p>
		<p className="mb-4 mt-8">{description}</p>
		<div className="flex gap-1 overflow-x-scroll scroll snap-x scrollbar-hidden">
			{topics.map((topic) => (
				<span
					key={`topic-${id}_${topic}`}
					className="bg-slate-700 shrink-0 py-1 px-3 rounded-2xl text-white snap-start"
				>
					{topic}
				</span>
			))}
		</div>
		<div className="flex mt-16 gap-2 justify-center align-center">
			<Button href={html_url} icon={faGithub} variation="secondary" />
			{homepage && <Button href={homepage} icon={faGlobe} variation="secondary" />}
		</div>
	</div>
);
