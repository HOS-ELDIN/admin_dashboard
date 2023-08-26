"use client";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
	stackedCustomSeries,
	stackedPrimaryXAxis,
	stackedPrimaryYAxis,
} from "../../../public/data/dummy";

import { useStateContext } from "@/contexts/ContextProvider";

const StackedChart = ({ width, height }) => {
	const { currentMode, themeColor } = useStateContext();

	return (
		// <div />
		<ChartComponent
			width={width}
			height={height}
			id="charts"
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			legendSettings={{
				textStyle: { color: currentMode === "dark" ? "#fff" : "black" },
			}}
		>
			<Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
			<SeriesCollectionDirective>
				{stackedCustomSeries.map((item, index) => (
					<SeriesDirective
						key={index}
						{...item}
						// ! fix the fill colors the small to be theme color and the long to be gray if light and white if dark
						fill={
							index === 0
								? themeColor
								: currentMode === "dark"
								? "#9ca3af"
								: "#404041"
						}
					/>
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default StackedChart;
