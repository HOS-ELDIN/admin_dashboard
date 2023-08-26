"use client";
import { useStateContext } from "@/contexts/ContextProvider";

import { Header } from "@/components";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	Tooltip,
	ColumnSeries,
	DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
	barPrimaryXAxis,
	barPrimaryYAxis,
	barCustomSeries,
} from "../../../../public/data/dummy";

const BarChartPage = () => {
	const { activeMenu, currentMode } = useStateContext();
	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category={"Bar"} title={"Olympic Medal Counts - RIO"} />
				<div className="w-full">
					<ChartComponent
						id="bar-chart"
						height="420px"
						primaryXAxis={barPrimaryXAxis}
						primaryYAxis={barPrimaryYAxis}
						chartArea={{ border: { width: 0 } }}
						tooltip={{ enable: true }}
						background={currentMode === "dark" ? "#33373e" : "#fff"}
						legendSettings={{
							textStyle: { color: currentMode === "dark" ? "#fff" : "black" },
						}}
					>
						<Inject
							services={[Category, Legend, Tooltip, ColumnSeries, DataLabel]}
						/>
						<SeriesCollectionDirective>
							{barCustomSeries.map((item, index) => (
								<SeriesDirective key={index} {...item} />
							))}
						</SeriesCollectionDirective>
					</ChartComponent>
				</div>
			</div>
		</div>
	);
};

export default BarChartPage;
