import { ProjectResponseModel } from './models/response/ProjectResponseModel';

export const getProjects = async () => {
	const response = await fetch('https://api.github.com/users/PauloHenriqueOliveiradeAlmeida/repos');
	const projects: ProjectResponseModel[] = await response.json();

	return projects.filter((project) => project.name !== 'PauloHenriqueOliveiradeAlmeida');
};
