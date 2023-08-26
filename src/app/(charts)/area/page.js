"use client";
import { useStateContext } from "@/contexts/ContextProvider";

import { Header } from "@/components";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	DateTime,
	SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

import {
	areaCustomSeries,
	areaPrimaryXAxis,
	areaPrimaryYAxis,
} from "../../../../public/data/dummy";

const AreaChartPage = () => {
	const { activeMenu, currentMode } = useStateContext();
	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category={"Area"} title={"Inflation Rate In Percentage"} />
				<div className="w-full">
					<ChartComponent
						id="area-chart"
						height="420px"
						primaryXAxis={areaPrimaryXAxis}
						primaryYAxis={areaPrimaryYAxis}
						chartArea={{ border: { width: 0 } }}
						tooltip={{ enable: true }}
						background={currentMode === "dark" ? "#33373e" : "#fff"}
						legendSettings={{
							textStyle: { color: currentMode === "dark" ? "#fff" : "black" },
						}}
					>
						<Inject services={[DateTime, Legend, SplineAreaSeries]} />
						<SeriesCollectionDirective>
							{areaCustomSeries.map((item, index) => (
								<SeriesDirective key={index} {...item} />
							))}
						</SeriesCollectionDirective>
					</ChartComponent>
				</div>
			</div>
		</div>
	);
};

export default AreaChartPage;
