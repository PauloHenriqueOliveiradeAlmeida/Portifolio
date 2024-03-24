import { useCallback, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope, faSmile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { loadProjects } from '../../utils/loadProjects';
import { Header } from '../../components/Header';
import { TimelineContainer } from '../../components/TimelineContainer';
import { Timeline } from '../../components/Timeline';
import { SectionText } from '../../components/SectionText';
import { Section } from '../../components/Section';
import { ProjectContainer } from '../../components/ProjectContainer';
import { Button } from '../../components/Button';
import { BubbleButton } from '../../components/BubbleButton';
import { Image } from '../../components/Image';
import { Footer } from '../../components/Footer';
function Home() {
	const [projects, setProjects] = useState<projectProp[] | null>(null);

	const handleLoadProjects = useCallback(async () => {
		const loadedProjects = await loadProjects();
		setProjects(loadedProjects);
	}, []);

	useEffect(() => {
		handleLoadProjects();
	}, [handleLoadProjects]);

	return (
		<div className="bg-black">
			<Header />

			<main className="flex flex-col p-4 sm:p-8 md:p-16 bg-white relative mb-16 divider-bottom" id="inicio">
				<figure className="flex flex-wrap items-center relative">
						<Image src="/profile.webp" alt="Foto de Paulo Henrique" />
					<div className="absolute top-1/2 left-1/2">
						<h3 className="bg-white text-black md:text-2xl">Olá, sou</h3>
						<h1 className="bg-primary text-white text-4xl md:text-6xl">
							<Typewriter
								options={{
									strings: ['Paulo.', 'Dev Fullstack JR.', 'Estudante de ADS.'],
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
					<Button href="/CV_PAULO_ALMEIDA.pdf" icon={faDownload} text="Baixar currículo" variation="black" download/>
				</div>
			</main>

			<SectionText image="/euSou.webp" title="Eu sou...">
				Sou Desenvolvedor Fullstack Júnior com foco em Typescript, estudante de Análise e Desenvolvimento de Sistemas e técnico em informática
				para internet.
				Tenho 18 anos e resido atualmente em Sorocaba - SP, embora seja ainda bem jovem já possuo uma experiência considerável em desenvolvimento que conquistei por meio de 
				freelances, trabalhos acadêmicos/voluntários e estágio,
				tendo atuado em diversos projetos interessantes, como o PAM (software utilizado pelo Corpo de Bombeiros), Monstronautas (plataforma de educação gameficada) e 
				Ümore (protótipo de plataforma de controle emocional), no momento sou estagiário no Instituto Edutech21, startup que desenvolve games em realidade virtual para o ensino matemático.
			</SectionText>

			<SectionText image="/objetivo.webp" title="O meu objetivo:" id="objetivos">
				Meu principal objetivo atualmente é crescer na carreira para que possa aprender mais e entregar produtos cada vez melhores, por isso estou em busca de uma vaga como 
				desenvolvedor júnior, entretanto, meu sonho profissional é criar meu próprio produto, algo que realmente possa facilitar a vida das pessoas, algo que tenha mais que apenas valor de mercado.
			</SectionText>

			<TimelineContainer title="Minha experiência" id="experiencia">
				<Timeline
					office="Desenvolvedor estagiário"
					company="Instituto Edutech21"
					startDate="09/2023"
					endDate="current"
					location="Sorocaba - SP"
				>
					Auxilio no desenvolvimento dos produtos da empresa, tais como sites e jogos com teor educativo, utilizando
					principalmente Typescript, React, Node, MYSQL e GDScript.
				</Timeline>
				<Timeline
					office="Desenvolvedor voluntário"
					company="GENTI - Grupo de Estudos do Núcleo de TI UNISO"
					startDate="03/2023"
					endDate="current"
					location="Sorocaba - SP"
				>
					Auxilio no desenvolvimento de softwares destinados a outros cursos e à comunidade, tendo como exemplo o site
					do PAM, desenvolvido em HTML, CSS, Javascript, PHP e MYSQL.
				</Timeline>
				<Timeline
					office="Desenvolvedor acadêmico"
					company="Ümore/Moreü - projeto acadêmico"
					startDate="03/2023"
					endDate="12/2023"
					location="Sorocaba - SP"
				>
					Auxiliei no desenvolvimento de um protótipo que tem por objetivo o uso de feedbacks emocionais, para a
					melhoria do ensino universitário.
					<br /> Auxiliei no desenvolvimento de um software mini-ERP para controle e gestão de ativos utilizando React,
					Flask e MYSQL
				</Timeline>
				<Timeline
					office="Desenvolvedor fullstack freelancer"
					startDate="08/2020"
					endDate="02/2022"
					location="Ribeirão Branco - SP"
				>
					Desenvolvi soluções web para diversas empresas de demasiados setores, utilizando, principalmente HTML, CSS,
					JavaScript, PHP, Wordpress e MYSQL.
				</Timeline>
			</TimelineContainer>

			<TimelineContainer title="Minha formação" id="formacao">
				<Timeline
					office="Análise e Desenvolvimento de Sistemas"
					company="UNISO - Universidade de Sorocaba"
					startDate="03/2023"
					endDate="06/2025"
					location="Sorocaba - SP"
				>
					Estou aprendendo muita coisa interessante sobre o universo de TI e sobre mercado de trabalho, como SCRUM,
					KANBAN, segurança da informação, direito digital, infraestrutura de TI, etc.
				</Timeline>
				<Timeline
					office="Técnico em informática para internet"
					company="ETEC Dr. Demétrio de Azevedo Júnior"
					startDate="02/2020"
					endDate="12/2022"
					location="Itapeva - SP"
				>
					Aprendi lógica de programação, ferramentas de desenvolvimento web, como por exemplo, HTML, CSS, Javascript,
					PHP, Wordpress, Bootstrap, etc.
				</Timeline>
				<Timeline
					office="Ensino médio"
					company="ETEC Dr. Demétrio de Azevedo Júnior"
					startDate="02/2020"
					endDate="12/2022"
					location="Itapeva - SP"
				>
					Aprendi conceitos acadêmicos da BNCC, como matemática, português, biologia, química, física, etc.
				</Timeline>
			</TimelineContainer>

			<div className="bg-white relative divider-top pt-16 pb-4">
				<Section title="Meus projetos" id="projetos" color="black">
					<ProjectContainer projects={projects as projectProp[]} />
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
