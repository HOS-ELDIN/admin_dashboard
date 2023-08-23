"use client";
import React from "react";
import { useStateContext } from "@/contexts/ContextProvider";

import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Inject,
	Search,
	Toolbar,
	Sort,
} from "@syncfusion/ej2-react-grids";

import { Header } from "@/components";

import { employeesData, employeesGrid } from "../../../../public/data/dummy";

const EmployeesPage = () => {
	const { activeMenu } = useStateContext();

	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 p-4 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header title={"Employees"} category={"Page"} />
				<GridComponent
					dataSource={employeesData}
					allowPaging
					allowSorting
					toolbar={["Search"]}
					width={"auto"}
				>
					<ColumnsDirective>
						{employeesGrid.map((item, index) => (
							<ColumnDirective key={index} {...item} />
						))}
					</ColumnsDirective>
					<Inject services={[Page, Search, Toolbar, Sort]} />
				</GridComponent>
			</div>
		</div>
	);
};

export default EmployeesPage;
