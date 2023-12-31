"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import {
	HtmlEditor,
	Image,
	Inject,
	Link,
	QuickToolbar,
	RichTextEditorComponent,
	Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../../../../public/data/dummy";

import { Header } from "@/components";

const EditorPage = () => {
	const { activeMenu } = useStateContext();
	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category={"App"} title={"Editor"} />
				<RichTextEditorComponent id="Editor">
					<EditorData />
					<Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
				</RichTextEditorComponent>
			</div>
		</div>
	);
};

export default EditorPage;
