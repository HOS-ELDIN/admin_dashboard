"use client";
import { useStateContext } from "@/contexts/ContextProvider";

import { Header } from "@/components";

import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	PieSeries,
	AccumulationDataLabel,
	Inject,
	AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../../../public/data/dummy";

const PieChartPage = () => {
	const { activeMenu, currentMode } = useStateContext();

	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category={"Pie"} title={"Project Cost Breakdown"} />
				<div className="w-full">
					<AccumulationChartComponent
						id="Pie-chart"
						height="full"
						tooltip={{ enable: true }}
						background={currentMode === "dark" ? "#33373e" : "#fff"}
						legendSettings={{
							textStyle: {
								color: currentMode === "dark" ? "#fff" : "black",
								size: "20px",
							},
							visible: "true",
							shapeWidth: 15,
							shapeHeight: 15,
						}}
					>
						<Inject
							services={[
								AccumulationLegend,
								PieSeries,
								AccumulationDataLabel,
								AccumulationTooltip,
							]}
						/>

						<AccumulationSeriesCollectionDirective>
							<AccumulationSeriesDirective
								dataSource={pieChartData}
								name="Sale"
								xName="x"
								yName="y"
								innerRadius="40%"
								startAngle={0}
								endAngle={360}
								radius="70%"
								explode
								explodeOffset="10%"
								explodeIndex={2}
								type="Pie"
								dataLabel={{
									visible: true,
									name: "text",
									position: "Inside",
									font: {
										fontWeight: "600",
										color: "#fff",
									},
								}}
							/>
						</AccumulationSeriesCollectionDirective>
					</AccumulationChartComponent>
				</div>
			</div>
		</div>
	);
};

export default PieChartPage;
