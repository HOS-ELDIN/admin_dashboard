"use client";
import { useStateContext } from "@/contexts/ContextProvider";

import { Header } from "@/components";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	ColumnSeries,
	Category,
	Tooltip,
	Legend,
	RangeColorSettingsDirective,
	RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import {
	colorMappingData,
	ColorMappingPrimaryXAxis,
	ColorMappingPrimaryYAxis,
	rangeColorMapping,
} from "../../../../public/data/dummy";

const ColorMappingPage = () => {
	const { activeMenu, currentMode } = useStateContext();

	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header
					category={"Color Mapping"}
					title={"USA CLIMATE - WEATHER BY MONTH"}
				/>
				<div className="w-full">
					<ChartComponent
						id="color-mapping-chart"
						height="420px"
						primaryXAxis={{
							...ColorMappingPrimaryXAxis,
							titleStyle: { color: currentMode === "dark" ? "#fff" : "black" },
						}}
						primaryYAxis={{
							...ColorMappingPrimaryYAxis,
							titleStyle: { color: currentMode === "dark" ? "#fff" : "black" },
						}}
						chartArea={{ border: { width: 0 } }}
						tooltip={{ enable: true }}
						background={currentMode === "dark" ? "#33373e" : "#fff"}
						legendSettings={{
							textStyle: { color: currentMode === "dark" ? "#fff" : "black" },
							mode: "Range",
						}}
					>
						<Inject services={[Category, Legend, Tooltip, ColumnSeries]} />
						<SeriesCollectionDirective>
							<SeriesDirective
								dataSource={colorMappingData[0]}
								name="USA"
								xName="x"
								yName="y"
								type="Column"
								cornerRadius={{
									topLeft: 10,
									topRight: 10,
								}}
							/>
						</SeriesCollectionDirective>
						<RangeColorSettingsDirective>
							{rangeColorMapping.map((item, index) => (
								<RangeColorSettingDirective key={index} {...item} />
							))}
						</RangeColorSettingsDirective>
					</ChartComponent>
				</div>
			</div>
		</div>
	);
};

export default ColorMappingPage;
