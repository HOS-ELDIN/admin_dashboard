const Button = ({ color, bgcolor, text, borderRadius, size }) => {
	return (
		<button
			className={`text-${{ size }} p-3 hover:drop-shadow-xl`}
			type="button"
			style={{
				backgroundColor: bgcolor,
				color: color,
				borderRadius: borderRadius,
			}}
		>
			{text}
		</button>
	);
};

export default Button;
