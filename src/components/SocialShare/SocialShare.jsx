import React, { useState } from "react";
import { FiShare } from "react-icons/fi";

function SocialShare({ shareURL }) {
	const [isOpen, setIsOpen] = useState(false);
    console.log(shareURL);
	return (
		<div className="flex flex-col items-center relative">
			<FiShare
				size={20}
				className="cursor-pointer relative mr-4"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{/* Dropdown */}
			{isOpen && (
				<div className="bg-white text-lg rounded shadow-black dropdown absolute mt-10 mr-4 z-10 p-6 w-[240px]">
					<ul>
						<li>Copy link</li>
						<li>Share on Whatsapp</li>
						<li>Share on Facebook</li>
						<li>Share on Linkedin</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default SocialShare;
