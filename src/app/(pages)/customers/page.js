"use client";
import React from "react";
import { useStateContext } from "@/contexts/ContextProvider";

import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Inject,
	Toolbar,
	Sort,
	Edit,
} from "@syncfusion/ej2-react-grids";

import { Header } from "@/components";

import { customersData, customersGrid } from "../../../../public/data/dummy";

const CustomersPage = () => {
	const { activeMenu } = useStateContext();

	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header title={"Customers"} category={"Page"} />
				<GridComponent
					dataSource={customersData}
					allowPaging
					allowSorting
					toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}
					width={"auto"}
					selectionSettings={{ type: "Multiple", mode: "Row" }}
					editSettings={{
						allowEditing: true,
						allowAdding: true,
						allowDeleting: true,
						mode: "Dialog",
					}}
				>
					<ColumnsDirective>
						{customersGrid.map((item, index) => (
							<ColumnDirective key={index} {...item} />
						))}
					</ColumnsDirective>
					<Inject services={[Page, Toolbar, Sort, Edit]} />
				</GridComponent>
			</div>
		</div>
	);
};

export default CustomersPage;
