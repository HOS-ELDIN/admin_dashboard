"use client";
import { useStateContext } from "@/contexts/ContextProvider";

import { Header } from "@/components";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Tooltip,
	HiloSeries,
	DateTime,
	Zoom,
	Logarithmic,
	Crosshair,
} from "@syncfusion/ej2-react-charts";

import {
	financialChartData,
	FinancialPrimaryXAxis,
	FinancialPrimaryYAxis,
} from "../../../../public/data/dummy";
import { crossOrigin } from "../../../../next.config";

const date1 = new Date("2017, 1, 1");

// eslint-disable-next-line consistent-return
function filterValue(value) {
	if (value.x >= date1) {
		// eslint-disable-next-line no-sequences
		return value.x, value.high, value.low;
	}
}
const returnValue = financialChartData.filter(filterValue);

const FinancialPage = () => {
	const { activeMenu, currentMode } = useStateContext();

	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category={"Financial"} title={"AAPLE Historical"} />
				<div className="w-full">
					<ChartComponent
						id="financial-chart"
						height="420px"
						primaryXAxis={FinancialPrimaryXAxis}
						primaryYAxis={{...FinancialPrimaryYAxis,titleStyle: { color: currentMode === "dark" ? "#fff" : "black" }}}
						chartArea={{ border: { width: 0 } }}
						tooltip={{ enable: true }}
						background={currentMode === "dark" ? "#33373e" : "#fff"}
						crosshair={{
							enable: true,
							lineType: "Vertical",
							line: { width: 0 },
						}}
					>
						<Inject
							services={[
								Tooltip,
								HiloSeries,
								DateTime,
								Logarithmic,
								Crosshair,
								Zoom,
							]}
						/>
						<SeriesCollectionDirective>
							<SeriesDirective
								dataSource={returnValue}
								name="Apple Inc"
								xName="x"
								yName="low"
								type="Hilo"
								low="low"
								high="high"
							/>
						</SeriesCollectionDirective>
					</ChartComponent>
				</div>
			</div>
		</div>
	);
};

export default FinancialPage;
