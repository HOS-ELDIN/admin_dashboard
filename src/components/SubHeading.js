import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const SubHeading = ({ text, secText, func }) => {
	return (
		<div className="flex justify-between items-center ">
			<div className="flex gap-4 items-center dark:text-gray-200">
				<p className="text-xl font-semibold">{text}</p>
				<p className="text-sm ">{secText}</p>
			</div>
			<button
				type="button"
				className="rounded-full text-theme-button  text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
				onClick={func}
			>
				<MdOutlineCancel />
			</button>
		</div>
	);
};

export default SubHeading;
