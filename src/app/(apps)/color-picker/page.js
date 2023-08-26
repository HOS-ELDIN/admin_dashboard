"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "@/components";

const change = (args) => {
	document.getElementById("preview").style.backgroundColor =
		args.currentValue.hex;
};

const ColorPickerPage = () => {
	const { activeMenu } = useStateContext();
	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="m-2 md:m-10 py-4 px-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category={"App"} title={"Color Picker"} />
				<div className="text-center">
					<div id="preview" />
					<div className="flex justify-center items-center gap-20 flex-wrap">
						<div>
							<p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
							<ColorPickerComponent
								id="inline-palette"
								mode="Palette"
								modeSwitcher={false}
								inline
								showButtons={false}
								change={change}
							/>
						</div>
						<div>
							<p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
							<ColorPickerComponent
								id="inline-picker"
								mode="Picker"
								modeSwitcher={false}
								inline
								showButtons={false}
								change={change}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorPickerPage;
