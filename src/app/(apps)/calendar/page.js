"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Agenda,
	Inject,
	Resize,
	DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../../../../public/data/dummy";
import { Header } from "@/components";

const CalenderAppPage = () => {
	const { activeMenu } = useStateContext();
	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category={"App"} title={"Calendar"} />
				<ScheduleComponent
					height={"650px"}
					eventSettings={{
						dataSource: scheduleData,
					}}
					// selectedDate={new Date(2023, 0, 10)}
				>
					<Inject
						services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
					/>
				</ScheduleComponent>
			</div>
		</div>
	);
};

export default CalenderAppPage;
