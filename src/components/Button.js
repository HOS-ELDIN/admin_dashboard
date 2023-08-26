import { useStateContext } from "@/contexts/ContextProvider";

const Button = ({ color, text, borderRadius, size, classes, func }) => {
	const { themeColor } = useStateContext();

	return (
		<button
			className={`text-${size} p-3 hover:drop-shadow-xl ${classes}`}
			type="button"
			style={{
				backgroundColor: themeColor,
				color: color,
				borderRadius: borderRadius,
			}}
			onClick={func}
		>
			{text}
		</button>
	);
};

export default Button;
