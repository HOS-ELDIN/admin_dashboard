"use client";
import { useStateContext } from "@/contexts/ContextProvider";

import { Header, StackedChart } from "@/components";

const PyramidChartPage = () => {
	const { activeMenu } = useStateContext();

	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category={"Stacked"} title={"Revenue Breakdown"} />
				<div className="w-full">
					<StackedChart
					//  width={''} height={''}
					/>
				</div>
			</div>
		</div>
	);
};

export default PyramidChartPage;
