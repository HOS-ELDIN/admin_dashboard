import React from "react";
import Image from "next/image";
import { useStateContext } from "@/contexts/ContextProvider";
import { userProfileData } from "../../public/data/dummy";
import { SubHeading, Button } from "@/components";
import avatar from "../../public/data/avatar.jpg";

const Notification = () => {
	const { handleClosingClick } = useStateContext();
	return (
		<div className=" nav-item bg-white dark:bg-secondary-dark-bg  absolute top-16 right-0 md:right-4 w-full md:w-96 rounded-lg p-8">
			<SubHeading
				text={"User Profile"}
				func={() => handleClosingClick("userProfile")}
			/>
			<div className="flex gap-5 py-6 border-b-1 border-color dark:border-gray-600">
				<Image src={avatar} alt="personal" className="rounded-full w-24 h-24" />
				<div>
					<h2 className="text-xl font-semibold dark:text-gray-200">
						Ramy Adham
					</h2>
					<p className="text-gray-500 dark:text-gray-400 text-sm">
						Administrator
					</p>
					<p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
						info@shop.com
					</p>
				</div>
			</div>
			<div>
				{userProfileData.map((item, index) => (
					<div
						key={index}
						className="flex gap-5 items-center p-3 border-b-1 border-color dark:border-gray-600 hover:bg-light-gray cursor-pointer  dark:hover:bg-gray-500 rounded-lg"
					>
						<div
							className="rounded-lg w-12 h-12 flex justify-center items-center text-xl"
							style={{ backgroundColor: item.iconBg, color: item.iconColor }}
						>
							{item.icon}
						</div>
						<div className="flex-1">
							<h3 className="font-semibold dark:text-gray-200">{item.title}</h3>
							<p className="text-gray-500 dark:text-gray-400 text-sm">
								{item.desc}
							</p>
						</div>
					</div>
				))}
			</div>
			<Button
				color={"white"}
				text={"Logout"}
				borderRadius={"10px"}
				size={"md"}
				classes="w-full mt-5"
				func={() => handleClosingClick("userProfile")}
			/>
		</div>
	);
};

export default Notification;
