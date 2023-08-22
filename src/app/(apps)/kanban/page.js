"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import {
	KanbanComponent,
	ColumnsDirective,
	ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../../../../public/data/dummy";

import { Header } from "@/components";

const KanbanPage = () => {
	const { activeMenu } = useStateContext();
	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
				<Header category={"App"} title={"Kanban"} />
				<KanbanComponent
					dataSource={kanbanData}
					id="kanban"
					keyField="Status"
					cardSettings={{ contentField: "Summary", headerField: "Id" }}
				>
					<ColumnsDirective>
						{kanbanGrid.map((item, index) => (
							<ColumnDirective key={index} {...item} />
						))}
					</ColumnsDirective>
				</KanbanComponent>
			</div>
		</div>
	);
};

export default KanbanPage;
