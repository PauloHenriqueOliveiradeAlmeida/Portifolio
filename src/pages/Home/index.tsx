import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope, faSmile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getProjects } from '../../services/getProjects';
import { Header } from '../../components/Header';
import { TimelineContainer } from '../../components/TimelineContainer';
import { Timeline } from '../../components/Timeline';
import { SectionText } from '../../components/SectionText';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { BubbleButton } from '../../components/BubbleButton';
import { Image } from '../../components/Image';
import { Footer } from '../../components/Footer';
import { ProjectResponseModel } from '../../services/models/response/ProjectResponseModel';
import { ProjectCard } from '../../components/ProjectCard';

function Home() {
	const [projects, setProjects] = useState<ProjectResponseModel[]>([]);

	useEffect(() => {
		const handleGetProjects = async () => {
			const projects = await getProjects();
			setProjects(projects);
		};
		handleGetProjects();
	}, []);

	return (
		<div className="bg-black">
			<Header />
			<main className="flex flex-col p-4 sm:p-8 md:p-16 bg-white relative mb-16 divider-bottom" id="inicio">
				<figure className="flex flex-wrap items-center relative">
					<Image src="https://github.com/PauloHenriqueOliveiradeAlmeida.png" alt="Foto de Paulo Henrique" />
					<div className="absolute top-1/2 left-1/2">
						<h3 className="bg-white text-black md:text-2xl">Olá, sou</h3>
						<h1 className="bg-primary text-white text-4xl md:text-6xl">
							<Typewriter
								options={{
									strings: ['Paulo.', 'Dev Fullstack PL.', 'Futuro arquiteto de software.'],
									autoStart: true,
									loop: true,
								}}
							/>
						</h1>
					</div>
				</figure>

				<div className="flex flex-col gap-4 mt-32 mb-36">
					<p className="text-black md:text-2xl">
						E estou muito feliz se saber de sua visita <FontAwesomeIcon icon={faSmile} />
					</p>
					<Button href="/CV_PAULO_ALMEIDA.pdf" icon={faDownload} text="Baixar currículo" variation="black" download />
				</div>
			</main>

			<SectionText image="/euSou.webp" title="Eu sou..." className="flex flex-col gap-4" id="sobre-mim">
				<p>Sou Desenvolvedor Full Stack Pleno com foco em backend, proficiente em Typescript, PHP, NestJS e React.</p>

				<p>
					Tecnólogo em Análise e Desenvolvimento de Sistemas pela UNISO e técnico em Informática para Internet pela ETEC
					Dr. Demétrio de Azevedo Júnior. Sou criador do Raven Framework e tenho uma paixão genuína por arquitetura de
					software.
				</p>

				<p>
					Resido em Votorantim - SP e possuo extensa experiência com desenvolvimento de software em sistemas de alta
					criticidade, com destaque para os setores financeiro e da saúde.
				</p>

				<p>
					Desde os 14 anos sou interessado em programação, tendo desenvolvido diversos projetos ao longo da minha
					carreira, do desenvolvimento de jogos educacionais até soluções escaláveis em microserviços.
				</p>

				<p>
					Prezo pelas boas práticas de desenvolvimento de software e tenho grande interesse em arquitetura de software,
					gosto muito de ensinar e partilhar conhecimento técnico com os desenvolvedores ao meu redor
				</p>

				<p>
					Atualmente sou Desenvolvedor Full Stack Pleno na CWI/Getnet, trabalhando principalmente com Spring, Kotlin,
					React, Express e NestJS.
				</p>

				<p>
					Além disso, sou o criador e mantenedor do "Raven Framework", um framework PHP altamente baseado em NestJS, que
					tem por filosofia ser fácil, simples, completo, "montável" e completamente open-source.
				</p>
			</SectionText>

			<SectionText image="/objetivo.webp" title="O meu objetivo:" id="objetivos">
				<p>
					Meu objetivo é continuar me aperfeiçoando cada vez mais e me especializar em arquitetura de software. Busco
					sempre contribuir para projetos de alto impacto operacional que tragam valor real aos usuários e à
					organização.
				</p>

				<p>
					Tenho compromisso com a excelência técnica, boas práticas de desenvolvimento e gosto muito de contribuir no
					desenvolvimento e mentorias dos colegas menos experientes.
				</p>

				<p>
					Acredito profundamente que ainda criarei uma empresa de muito valor que poderá trazer algo positivo para a
					sociedade, deixando minha marca nas pessoas que puder ajudar.
				</p>
			</SectionText>

			<TimelineContainer title="Minha experiência" id="experiencia">
				<Timeline
					office="Desenvolvedor Full Stack Pleno"
					company="CWI/Getnet"
					startDate="06/2025"
					endDate="Presente"
					location="Remoto"
				>
					<ul className="list-disc px-4">
						<li>Desenvolvimento com Spring, Kotlin, React, Express, NestJS, MongoDB</li>
						<li>Treinamento e mentoria aos desenvolvedores menos experientes</li>
						<li>Uso de arquitetura de microserviços, MVC e hexagonal</li>
						<li>
							Desenvolvimento e manutenção do módulo interno de prevenção à fraude LATAM de ponta-ponta (frontend, BFF,
							microserviço)
							<ul className="list-disc px-4 mt-2">
								<li>Migração para arquitetura de microfrontend (Module federation)</li>
								<li>Aumento de ~80% de performance organizacional com o uso das funcionalidades desenvolvidas</li>
								<li>Otimização de logs de até ~40%, reduzindo um alto valor de custo</li>
								<li>Projeto de alto impacto operacional elogiado pela alta gestão</li>
							</ul>
						</li>
						<li>
							Atuação no desenvolvimento e manutenção do portal de prevenção à fraude Brasil de ponta-ponta (frontend,
							Proxy Next.js, microserviços):
							<ul className="list-disc px-4 mt-2">
								<li>Arquitetura feature-based orientada a negócio</li>
								<li>Cobertura de mais de 80% em testes</li>
								<li>Atualização e gerenciamento de informações em tempo real com Polling</li>
								<li>Projeto de alto impacto operacional</li>
							</ul>
						</li>
					</ul>
				</Timeline>
				<Timeline
					office="Desenvolvedor Full Stack"
					company="Epiousion IT"
					startDate="04/2024"
					endDate="06/2025"
					location="Sorocaba - SP"
				>
					<ul className="list-disc px-4">
						<li>Desenvolvimento com NestJS, Laravel, React, .NET</li>
						<li>Auxílio no desenvolvimento e evolução da arquitetura utilizada nos projetos</li>
						<li>Apoio aos desenvolvedores menos experientes na conclusão de suas tarefas</li>
						<li>Arquitetura e implementação de um provedor bancário usando Rest, Websocket, Webhooks e eventos</li>
						<li>
							Refatoração de um sistema legado em PHP 7.4 para PHP 8.3:
							<ul className="list-disc px-4 mt-2">
								<li>Reescrita em Laravel e GraphQL</li>
								<li>Uso do Cypress para testes e2e</li>
								<li>Integração gradual entre o legado e o novo sistema</li>
								<li>Melhoria de performance de 98,25% (de ~52s resposta para ~920ms resposta)</li>
							</ul>
						</li>
						<li>
							Criação de um microserviço com Cron-Job compatível com infraestrutura serverless, reduzindo custos de
							hospedagem
						</li>
						<li>
							Ajuda no desenvolvimento do processo de CI/CD dos projetos, configurando VPS com Linux e utilizando
							brevemente a AWS
						</li>
						<li>
							Liderança técnica no desenvolvimento de um ERP para área laboratorial, fazendo refinamento de requisitos,
							definindo a arquitetura, auxiliando desenvolvedores e garantindo entregas
						</li>
					</ul>
				</Timeline>
				<Timeline
					office="Estágio em desenvolvimento de software"
					company="Instituto Edutech21"
					startDate="09/2023"
					endDate="04/2024"
					location="Sorocaba - SP"
				>
					<ul className="list-disc px-4">
						<li>Criação de jogo educacional com Python</li>
						<li>Desenvolvimento de backend em Express com banco MYSQL</li>
						<li>
							Integração com sistema web em React e NextJS para consulta de métricas baseadas na BNCC, com foco em
							acompanhamento pedagógico e engajamento dos alunos
						</li>
					</ul>
				</Timeline>
			</TimelineContainer>

			<TimelineContainer title="Minha formação" id="formacao">
				<Timeline
					office="Tecnólogo em Análise e Desenvolvimento de Sistemas"
					company="UNISO - Universidade de Sorocaba"
					startDate="03/2023"
					endDate="06/2025"
					location="Sorocaba - SP"
				>
					<ul className="list-disc px-4">
						<li>Metodologias ágeis, segurança da informação e cultura de DevOps.</li>
						<li>Infraestrutura de TI, estrutura de dados e fundamentos em OOP.</li>
						<li>Algoritmos, bancos SQL e NoSQL, redes e testes.</li>
					</ul>
				</Timeline>
				<Timeline
					office="Técnico em Informática para Internet"
					company="ETEC Dr. Demétrio de Azevedo Júnior"
					startDate="02/2020"
					endDate="12/2022"
					location="Itapeva - SP"
				>
					<ul className="list-disc px-4">
						<li>Lógica de programação e ferramentas de desenvolvimento web.</li>
						<li>HTML, CSS, Javascript, PHP, Wordpress, Bootstrap.</li>
					</ul>
				</Timeline>
			</TimelineContainer>

			<div className="bg-white relative divider-top pt-16 pb-4">
				<Section title="Meus projetos" id="projetos" color="black">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{projects?.map((project) => <ProjectCard {...project} key={project.id} />)}
					</div>
				</Section>

				<Section title="Que bom ver que você chegou até aqui!" color="black">
					<p className="text-2xl">
						Agora, que tal entrar em contato comigo <FontAwesomeIcon icon={faSmile} />?
					</p>

					<div className="flex align-center justify-start gap-4 mt-5">
						<BubbleButton href="mailto:paulo333henrique00@gmail.com" icon={faEnvelope} />
						<BubbleButton href="https://linkedin.com/in/paulo-henrique-oliveira-almeida" icon={faLinkedin} />
						<BubbleButton href="https://github.com/PauloHenriqueOliveiradeAlmeida" icon={faGithub} />
					</div>
				</Section>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
