export const loadProjects = async () => {
	const response = await fetch("https://api.github.com/users/PauloHenriqueOliveiradeAlmeida/repos");
	const projects = await response.json() as projectProp[];

	return projects.filter(project => project.name !== "PauloHenriqueOliveiradeAlmeida");

};
