import React from "react";

import { useStateContext } from "@/contexts/ContextProvider";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { cartData } from "../../public/data/dummy";

import Image from "next/image";
import { SubHeading, Button } from "@/components";

const Cart = () => {
	const { handleClosingClick } = useStateContext();
	return (
		<div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
			<div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-theme-bg w-full sm:w-400 p-8">
				<SubHeading
					text={"Shopping Cart"}
					// secText={"5 New"}
					func={() => handleClosingClick("cart")}
				/>

				<div className="flex flex-col ">
					{cartData.map((item, index) => (
						<div
							key={index}
							className="border-b-1 border-color dark:border-gray-600 flex gap-4 justify-center items-center py-6 px-4"
						>
							<Image
								src={item.image}
								alt="product"
								className="rounded-xl h-20 w-24"
							/>
							<div className="flex-1">
								<h3 className="font-semibold">{item.name}</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
									{item.category}
								</p>
								<div className="flex mt-2 gap-4">
									<span className="font-semibold">{item.price}</span>
									<div className="flex gap-2 justify-center items-center">
										<AiOutlineMinusSquare className=" text-red-600 text-2xl cursor-pointer" />
										<span>0</span>
										<AiOutlinePlusSquare className=" text-green-600 text-2xl cursor-pointer" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="my-3">
					<div className="flex gap-4 mt-4 justify-between mb-3">
						<span className="text-gray-500 dark:text-gray-200">Sub Total</span>
						<span className="font-semibold">$890</span>
					</div>
					<div className="flex gap-4 mt-4 justify-between">
						<span className="text-gray-500 dark:text-gray-200">Total</span>
						<span className="font-semibold">$890</span>
					</div>
				</div>

				<Button
					color={"white"}
					text={"Place Order"}
					borderRadius={"10px"}
					size={"md"}
					classes="w-full mt-5"
					func={() => handleClosingClick("cart")}
				/>
			</div>
		</div>
	);
};

export default Cart;
