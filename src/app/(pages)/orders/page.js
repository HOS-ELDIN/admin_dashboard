"use client";

import {
	ordersData,
	ordersGrid,
	contextMenuItems,
} from "../../../../public/data/dummy";

import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Inject,
	Toolbar,
} from "@syncfusion/ej2-react-grids";
import React from "react";

import { Header } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";

const OrderPage = () => {
	const { activeMenu } = useStateContext();
	let gridcomp;
	const toolbarClick = (args) => {
		if (gridcomp) {
			if (args.item.id === "gridcomp_pdfexport") {
				gridcomp.pdfExport();
				// console.log("pdf clicked");
			} else if (args.item.id === "gridcomp_excelexport") {
				gridcomp.excelExport();
				// console.log("excel clicked");
			}
		}
	};

	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header title={"Orders"} category={"Page"} />
				<GridComponent
					id="gridcomp"
					dataSource={ordersData}
					allowPaging
					allowSorting
					allowFiltering
					allowResizing
					toolbar={["PdfExport", "ExcelExport"]}
					allowExcelExport
					allowPdfExport
					contextMenuItems={contextMenuItems}
					ref={(g) => (gridcomp = g)}
					toolbarClick={toolbarClick}
				>
					<ColumnsDirective>
						{ordersGrid.map((item, index) => (
							<ColumnDirective key={index} {...item} />
						))}
					</ColumnsDirective>
					<Inject
						services={[
							Resize,
							Sort,
							ContextMenu,
							Filter,
							Page,
							ExcelExport,
							PdfExport,
							Toolbar,
						]}
					/>
				</GridComponent>
			</div>
		</div>
	);
};

export default OrderPage;
