interface imageProps {
	src: string,
	alt: string
}

export const Image = ({ src, alt }: imageProps) => (
	<img src={src} alt={alt} className="w-3/5 rounded-full sm:w-2/5" />
);
