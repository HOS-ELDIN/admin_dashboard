import React from "react";
import Image from "next/image";
import { useStateContext } from "@/contexts/ContextProvider";
import { chatData } from "../../public/data/dummy";
import { SubHeading, Button } from "@/components";

const Chat = () => {
	const { handleClosingClick } = useStateContext();
	return (
		<div className=" nav-item bg-white dark:bg-secondary-dark-bg  absolute top-16 right-0 md:right-52 w-full md:w-96 rounded-lg p-8">
			<SubHeading
				text={"Messages"}
				secText={"5 New"}
				func={() => handleClosingClick("chat")}
			/>
			<div>
				{chatData.map((item, index) => (
					<div
						key={index}
						className="flex gap-5 items-center p-3 border-b-1 border-color dark:border-gray-600 cursor-pointer"
					>
						<Image
							src={item.image}
							alt={item.message}
							className="rounded-full w-10 h-10"
						/>
						<div className="flex-1">
							<h3 className="font-semibold dark:text-gray-200">
								{item.message}
							</h3>
							<p className="text-gray-500 dark:text-gray-400 text-sm">
								{item.desc}
							</p>
							<span className="text-gray-500 dark:text-gray-400 text-xs">
								{item.time}
							</span>
						</div>
					</div>
				))}
			</div>
			<Button
				color={"white"}
				text={"See all messages"}
				borderRadius={"10px"}
				size={"md"}
				classes="w-full mt-5"
				func={() => handleClosingClick("chat")}
			/>
		</div>
	);
};

export default Chat;
