"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../public/data/dummy";
import { useStateContext } from "@/contexts/ContextProvider";

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize } = useStateContext();

	//handle closing the menu in small screens
	const handleCloseSidebar = () => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		}
	};

	//active link styling
	const activeLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-white";
	const normalLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

	const router = usePathname();

	return (
		<div
			className={
				activeMenu
					? "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
					: "w-0 dark:bg-secondary-dark-bg"
			}
		>
			<div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
				{activeMenu && (
					<>
						<div className="flex justify-between items-center">
							<Link
								href="/"
								onClick={handleCloseSidebar}
								className="items-center gap-3 ml-3 mt-4 flex text-xl font-extralight tracking-tight dark:text-white text-slate-900"
							>
								<SiShopware /> <span>shoppy</span>
							</Link>

							{/* <TooltipComponent content="Menu" position="BottomCenter"> */}
							<button
								type="button"
								onClick={handleCloseSidebar}
								className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
							>
								<MdOutlineCancel />
							</button>
							{/* </TooltipComponent> */}
						</div>
						<div className="mt-10 ">
							{links.map((category) => (
								<div key={category.title}>
									<p className="text-gray-400 m-3 mt-4 uppercase">
										{category.title}
									</p>
									{category.links.map((link) => (
										<Link
											key={link.name}
											href={`/${link.name}`}
											onClick={handleCloseSidebar}
											className={
												router == `/${link.name}` ||
												(`/${link.name}` == "/ecommerce" && router == "/")
													? activeLink
													: normalLink
											}
											style={
												router == `/${link.name}` ||
												(`/${link.name}` == "/ecommerce" && router == "/")
													? { backgroundColor: "blue" }
													: { backgroundColor: "inherit" }
											}
										>
											{link.icon}
											<span className="capitalize">{link.name}</span>
										</Link>
									))}
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
