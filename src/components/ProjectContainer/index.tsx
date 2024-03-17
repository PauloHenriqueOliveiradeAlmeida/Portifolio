import { ProjectCard } from '../ProjectCard';

export const ProjectContainer = ({ projects }: { projects: projectProp[] }) => (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		{projects?.map((project) => {
			return <ProjectCard {...project} key={project.id} />;
		})}
	</div>
);
