import { useEffect, useState } from 'react';

export const Header = () => {
	const [backgroundColor, setBackgroundColor] = useState<'bg-white' | 'bg-black'>('bg-white');

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const handleScroll = () => {
		setBackgroundColor(screen.height - window.scrollY <= 100 ? 'bg-black' : 'bg-white');
	};

	return (
		<header
			className={`flex justify-center sticky top-0 w-full py-4 z-10 transition ease-linear shadow ${backgroundColor}`}
		>
			<nav>
				<ul
					className={`text-xs sm:text-sm md:text-lg flex justify-center list-none last:border-r-0 ${backgroundColor === 'bg-white' ? 'text-black' : ' text-white'}`}
				>
					<li className="px-2 border-r-2 sm:px-4 md:px-8">
						<a href="#inicio">Início</a>
					</li>
					<li className="px-2 border-r-2 sm:px-4 md:px-8">
						<a href="#objetivos">Objetivos</a>
					</li>
					<li className="px-2 border-r-2 sm:px-4 md:px-8">
						<a href="#experiencia">Experiência</a>
					</li>
					<li className="px-2 border-r-2 sm:px-4 md:px-8">
						<a href="#formacao">Formação</a>
					</li>
					<li className="px-2 sm:px-4">
						<a href="#projetos">Projetos</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
