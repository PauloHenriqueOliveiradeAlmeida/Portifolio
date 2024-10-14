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
									strings: ['Paulo.', 'Dev Fullstack.', 'Estudante de ADS.', 'Futuro arquiteto de software.'],
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

			<SectionText image="/euSou.webp" title="Eu sou...">
				<p>
					Sou Desenvolvedor Fullstack, proeficiente em Javascript/Typescript e PHP, estudante de Análise e
					Desenvolvimento de Sistemas, técnico em informática para internet, criador do Raven Framework e um futuro
					arquiteto de software.
				</p>

				<p>
					Tenho 19 anos e resido atualmente em Sorocaba - SP, embora seja ainda bem jovem possuo grande experiência com
					desenvolvimento de software, principalmente backend, tenho um amor muito grande por arquitetura, tendo também
					já desenhado alguns sistemas.
				</p>

				<p>
					Sempre fui muito estudioso e comecei na programação aos 14 anos, fazendo alguns jogos por hobbie enquanto
					também vendia alguns sistemas mais básicos para pequenos comércios de minha cidade natal, um projeto feito
					nessa época que me orgulho muito até hoje é o "Monstronautas", uma plataforma de ensino infantil.
				</p>

				<p>
					Em 2023 comecei a universidade, vindo embora para Sorocaba - SP para melhores oportunidades, aqui fiz alguns
					trabalhos voluntários para minha universidade, entre eles se destaca o "PAM", um software de gerenciamento
					para o Plano de Auxílio Mútuo da região, nessa época também comecei como estagiário numa startup de
					desenvolvimento de jogos.
				</p>

				<p>
					Atualmente sou desenvolvedor Fullstack na Epiousion IT, trabalhando principalmente com Nest, React, PHP e
					Linux, além disso, sou o criador e, por enquanto, o único mantenedor do "Raven Framework", um framework PHP
					altamente baseado em Nest, que tem por filosofia ser fácil, simples, completo, "montável" e completamente
					open-source.
				</p>
			</SectionText>

			<SectionText image="/objetivo.webp" title="O meu objetivo:" id="objetivos">
				<p>
					Meu objetivo no momento é me aperfeiçoar cada vez mais e me especializar em arquitetura de software, no
					momento minha grande meta é ser sênior até os 25 anos, entretanto, acredito profundamente que ainda criarei
					uma empresa de muito valor que poderá realmente trazer algo positivo para a sociedade, meu grande objetivo é
					deixar a minha marca nas pessoas que puder ajudar.
				</p>
			</SectionText>

			<TimelineContainer title="Minha experiência" id="experiencia">
				<Timeline
					office="Desenvolvedor Fullstack"
					company="Epiousion IT"
					startDate="04/2024"
					endDate="current"
					location="Sorocaba - SP (Híbrido)"
				>
					Desenvolvo aplicações escaláveis e de baixo nível de acoplamento, utilizando principalmente: Nest e PHP para
					backend e React para frontend.
					<br />
					Melhoro a qualidade de código e trabalho na manutenção de sistemas legados, tornando os códigos mais simples e
					aplicando Design Patterns quando necessário.
					<br />
					Auxilio no desenvolvimento da arquitetura de novos projetos, pensando no nível de complexidade, desempenho,
					custo e escalonamento.
					<br />
					Auxilio novos desenvolvedores, estando a disposição para ajudá-los na realização de suas tarefas.
					<br />
				</Timeline>
				<Timeline
					office="Mantenedor do Raven Framework"
					company="Comunidade"
					startDate="06/2024"
					endDate="current"
					location="Sorocaba - SP"
				>
					Desenvolvo como hobbie o Raven Framework, um framework em PHP que utiliza em seu interior uma arquitetura
					baseada na arquitetura de Micro-Kernel, seu foco é o desenvolvimento de API's Rest, fortemente inspirado em
					Nest.
					<br />
					No momento ele conta com um sistema de roteamento com suporte a parâmetros, conversão da requisição para
					objetos de transferência de dados, validação dos dados da requisição, sistema de segurança e integração com
					Swagger (em desenvolvimento).
				</Timeline>
				<Timeline
					office="Desenvolvedor voluntário"
					company="GENTI - Grupo de Estudos do Núcleo de TI UNISO"
					startDate="03/2023"
					endDate="09/2024"
					location="Sorocaba - SP"
				>
					Auxiliava no desenvolvimento de softwares destinados a outros cursos e à comunidade, tendo como exemplo o site
					do PAM, desenvolvido em HTML, CSS, Javascript, PHP e MYSQL.
				</Timeline>
				<Timeline
					office="Desenvolvedor estagiário"
					company="Instituto Edutech21"
					startDate="09/2023"
					endDate="04/2024"
					location="Sorocaba - SP"
				>
					Auxiliava no desenvolvimento dos produtos da empresa, tais como sites e jogos com teor educativo, utilizando
					principalmente Express, Next, MYSQL e GDScript.
				</Timeline>
				<Timeline
					office="Desenvolvedor acadêmico"
					company="Ümore/Moreü - projeto acadêmico"
					startDate="03/2023"
					endDate="12/2023"
					location="Sorocaba - SP"
				>
					Auxiliava no desenvolvimento de um protótipo que tem por objetivo o uso de feedbacks emocionais, para a
					melhoria do ensino universitário.
					<br />
					Auxiliava no desenvolvimento de um software mini-ERP para controle e gestão de ativos utilizando React, Flask
					e MYSQL
				</Timeline>
				<Timeline
					office="Desenvolvedor fullstack freelancer"
					startDate="08/2020"
					endDate="02/2022"
					location="Ribeirão Branco - SP"
				>
					Desenvolvia soluções web para diversas empresas de demasiados setores, utilizando, principalmente HTML, CSS,
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
					Estou aprendendo muita coisa interessante sobre o universo da TI, como metodologias ágeis, segurança da
					informação, cultura de DevOps, infraestrutura de TI, estrutura de dados, etc.
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
