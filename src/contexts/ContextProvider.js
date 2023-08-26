"use client";

import { createContext, useContext, useState, useEffect } from "react";

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
		}
		if (e.target.value === "light") {
			head.classList.remove("dark");
		}
	};
	const setColor = (color) => {
		setThemeColor(color);
		localStorage.setItem("themeColor", color);
		// console.log(color);
	};

	const handleClick = (key) => {
		setIsClicked({ ...initialState, [key]: "true" });
	};
	const handleClosingClick = (key) => {
		setIsClicked({ ...initialState, [key]: false });
		// console.log(`${key} is closing`);
	};

	useEffect(() => {
		if (localStorage.getItem("themeColor")) {
			setThemeColor(localStorage.getItem("themeColor"));
		}
		if (localStorage.getItem("themeMode")) {
			let savedTheme = localStorage.getItem("themeMode");
			setCurrentMode(savedTheme);
			const head = document.getElementById("base-html");

			if (savedTheme === "dark") {
				head.classList.add(savedTheme);
			}
			if (savedTheme === "light") {
				head.classList.remove("dark");
			}
		}
	}, []);

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
				handleClosingClick,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
