import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

const SettingIcon = () => {
	return (
		<div className="fixed right-4 bottom-4 z-[1000]">
			<TooltipComponent content="setting" position="TopCenter">
				<button
					type="button"
					className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full bg-blue-700"
				>
					<FiSettings />
				</button>
			</TooltipComponent>
		</div>
	);
};

export default SettingIcon;
