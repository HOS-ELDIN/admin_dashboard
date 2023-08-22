import { useStateContext } from "@/contexts/ContextProvider";

const Button = ({ color, text, borderRadius, size }) => {
	const { themeColor } = useStateContext();

	return (
		<button
			className={`text-${{ size }} p-3 hover:drop-shadow-xl`}
			type="button"
			style={{
				backgroundColor: themeColor,
				color: color,
				borderRadius: borderRadius,
			}}
		>
			{text}
		</button>
	);
};

export default Button;
