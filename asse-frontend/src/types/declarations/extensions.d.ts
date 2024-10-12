declare module '*.svg?react' {
	const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default content;
}

declare module '*.svg' {
	const content: string;
	export default content;
}

declare module '*.woff2';
