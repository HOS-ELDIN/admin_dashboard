import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../../public/data/dummy";

import { useStateContext } from "@/contexts/ContextProvider";

const ThemeSettings = () => {
	const { currentMode, themeColor, setMode, setColor, setActiveThemeSettings } =
		useStateContext();
	return (
		<div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
			<div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-theme-bg w-full sm:w-400">
				<div className="flex justify-between items-center p-4 ml-4">
					<p className="text-xl font-semibold">Settings</p>
					<button
						type="button"
						className="rounded-full text-theme-button  text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
						onClick={() => setActiveThemeSettings(false)}
					>
						<MdOutlineCancel />
					</button>
				</div>
				<div className="flex flex-col border-t-1 border-color p-4 ml-4 ">
					<p className="text-lg font-semibold">Theme Options</p>
					<div className="mt-4">
						<input
							type="radio"
							name="theme"
							id="light"
							value={"light"}
							className="cursor-pointer"
							onChange={setMode}
							checked={currentMode === "light"}
						/>
						<label htmlFor="light" className="ml-2 text-md cursor-pointer">
							Light
						</label>
					</div>
					<div className="mt-4">
						<input
							type="radio"
							name="theme"
							id="dark"
							value={"dark"}
							className="cursor-pointer"
							onChange={setMode}
							checked={currentMode === "dark"}
						/>
						<label htmlFor="dark" className="ml-2 text-md cursor-pointer">
							Dark
						</label>
					</div>
				</div>
				<div className="flex flex-col border-t-1 border-color p-4 ml-4 ">
					<p className="text-lg font-semibold">Theme Colors</p>
					<div className="flex gap-3 mt-4 flex-wrap">
						{themeColors.map((col, index) => (
							<TooltipComponent
								key={index}
								content={col.name}
								position="BottomCenter"
							>
								<div>
									<button
										type="button"
										onClick={() => setColor(col.color)}
										style={{ backgroundColor: col.color }}
										className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
									>
										<BsCheck
											className={` text-3xl text-white ${
												col.color === themeColor ? "block" : "hidden"
											}`}
										/>
									</button>
								</div>
							</TooltipComponent>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThemeSettings;
