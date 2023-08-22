"use client";
import React, { useEffect } from "react";
import { useStateContext } from "@/contexts/ContextProvider";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../../public/data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "@/components";
import Image from "next/image";

const NavButton = ({ title, icon, customFunc, color, dotColor }) => {
	return (
		<TooltipComponent content={title} position="BottomCenter">
			<button
				tybe="button"
				style={{ color: color }}
				onClick={customFunc}
				className="relative text-xl rounded-full p-3 hover:bg-light-gray"
			>
				<span
					style={{ background: dotColor }}
					className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
				/>
				{icon}
			</button>
		</TooltipComponent>
	);
};

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		themeColor,
		handleClick,
		screenSize,
		setScreenSize,
	} = useStateContext();

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);

		/* eslint-disable-next-line */
	}, []);

	useEffect(() => {
		screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
		/* eslint-disable-next-line */
	}, [screenSize]);

	return (
		<div className={activeMenu ? " md:ml-72 " : " w-full flex-2"}>
			<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar">
				<div className="flex justify-between p-2 md:mx-6 relative">
					<NavButton
						title={"Menu"}
						icon={<AiOutlineMenu />}
						customFunc={() => setActiveMenu((prev) => !prev)}
						color={themeColor}
						dotColor={"transperant"}
					/>
					<div className="flex">
						<NavButton
							title={"cart"}
							icon={<FiShoppingCart />}
							customFunc={() => handleClick("cart")}
							color={themeColor}
							dotColor={"transperant"}
						/>

						<NavButton
							title={"chat"}
							icon={<BsChatLeft />}
							customFunc={() => handleClick("chat")}
							color={themeColor}
							dotColor={"#03c9d7"}
						/>

						<NavButton
							title={"notifications"}
							icon={<RiNotification3Line />}
							customFunc={() => handleClick("notification")}
							color={themeColor}
							dotColor={"#03c9d7"}
						/>

						<TooltipComponent content={"profile"} position="BottomCenter">
							<div
								className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg "
								onClick={() => handleClick("userProfile")}
							>
								<Image
									src={avatar}
									alt="avatar"
									className="rounded-full w-8 h-8"
								/>
								<p className="text-gray-400 text-14">
									<span>Hi, </span>
									<span className=" font-bold ml-1"> Hossam</span>
								</p>
								<MdKeyboardArrowDown className="text-gray-400 text-14" />
							</div>
						</TooltipComponent>

						{isClicked.cart && <Cart />}
						{isClicked.chat && <Chat />}
						{isClicked.notification && <Notification />}
						{isClicked.userProfile && <UserProfile />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
