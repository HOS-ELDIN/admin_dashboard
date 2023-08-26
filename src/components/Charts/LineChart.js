import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Tooltip,
	DateTime,
	LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
	lineCustomSeries,
	LinePrimaryYAxis,
	LinePrimaryXAxis,
} from "../../../public/data/dummy";

import { useStateContext } from "@/contexts/ContextProvider";

const LineChart = () => {
	const { currentMode } = useStateContext();

	return (
		<ChartComponent
			id="line-chart"
			height="420px"
			primaryXAxis={LinePrimaryXAxis}
			primaryYAxis={LinePrimaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			background={currentMode === "dark" ? "#33373e" : "#fff"}
			legendSettings={{
				textStyle: { color: currentMode === "dark" ? "#fff" : "black" },
			}}
		>
			<Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
			<SeriesCollectionDirective>
				{lineCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default LineChart;
