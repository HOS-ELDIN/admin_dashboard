"use client";
import {
	SparklineComponent,
	Inject,
	SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
	return (
		// <div />
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType="Numeric"
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName="x"
			yName="yval"
			type={type}
			tooltipSettings={{
				visible: true,
				format: "${yval}",

				trackLineSettings: { visible: true },
			}}
			markerSettings={{ visible: ["All"], fill: `${color}` }}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	);
};

export default SparkLine;
