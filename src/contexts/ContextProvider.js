"use client";

import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [themeColor, setThemeColor] = useState("#FF5C8E");
	const [currentMode, setCurrentMode] = useState("light");
	const [activeThemeSettings, setActiveThemeSettings] = useState(false);

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem("themeMode", e.target.value);
		const head = document.getElementById("base-html");

		if (e.target.value === "dark") {
			head.classList.add(e.target.value);
			console.log(e.target.value);
		}
		if (e.target.value === "light") {
			head.classList.remove("dark");
			console.log(e.target.value);
		}
		// console.log(e.target.value);
	};
	const setColor = (color) => {
		setThemeColor(color);
		localStorage.setItem("themeColor", color);
		// console.log(color);
	};

	const handleClick = (key) => {
		setIsClicked({ ...initialState, [key]: "true" });
	};

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentMode,
				setCurrentMode,
				themeColor,
				setThemeColor,
				setMode,
				setColor,
				activeThemeSettings,
				setActiveThemeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
