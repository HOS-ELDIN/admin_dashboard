"use client";

import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { FiSettings } from "react-icons/fi";

import { useStateContext } from "@/contexts/ContextProvider";

const SettingIcon = () => {
	const { themeColor, setActiveThemeSettings } = useStateContext();

	const sett = "setting";
	return (
		<div className="fixed right-4 bottom-4 z-[1000]">
			<TooltipComponent content={sett} position="TopCenter">
				<button
					type="button"
					className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full"
					onClick={() => setActiveThemeSettings(true)}
					style={{ background: themeColor }}
				>
					<FiSettings />
				</button>
			</TooltipComponent>
		</div>
	);
};

export default SettingIcon;
