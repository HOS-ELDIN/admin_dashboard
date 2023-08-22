import React from "react";
import SettingIcon from "./SettingIcon";
import ThemeSettings from "./ThemeSettings";
import { useStateContext } from "@/contexts/ContextProvider";

const ThemeWindow = () => {
	const { activeThemeSettings } = useStateContext();
	return (
		<>
			<SettingIcon />
			{activeThemeSettings && <ThemeSettings />}
		</>
	);
};

export default ThemeWindow;
