import React, { useEffect, useRef, useState } from "react";
import { FiLink, FiShare } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import {
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
} from "react-share";

function SocialShare({ shareURL, name }) {
	console.log(name);
	const [isOpen, setIsOpen] = useState(false);
	const modalRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target) &&
				isOpen
			) {
				setIsOpen(false);
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);
	const [copyText, setCopyText] = useState("Copy Link");

	const copyLink = () => {
		navigator.clipboard.writeText(shareURL);
		setCopyText("Copied!");
		setTimeout(() => {
			setCopyText("Copy link");
		}, 500);
	};

	const handleShareClick = async () => {
		const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (navigator.share && isMobile) {
			try {
				await navigator.share({
					title: name,
					text: name,
					url: shareURL,
				});
			} catch (error) {
				console.error("Error sharing:", error);
			}
		} else {
			setIsOpen(!isOpen);
			// Toggle the modal on desktop or unsupported devices
		}
	};

	return (
		<div className="flex flex-col items-center relative">
			<FiShare
				size={20}
				className="cursor-pointer relative mr-4 transition-all duration-300 ease-in-out hover:text-red-500"
				onClick={handleShareClick}
			/>
			{/* Dropdown */}
			{isOpen && (
				<div
					ref={modalRef}
					className="bg-white text-lg rounded-lg shadow-black dropdown absolute mt-10 mr-4 z-10 w-[275px] custom-shadow "
				>
					<ul>
						<button
							className="flex gap-4 items-center px-[20px] py-[12px] transition-all duration-300 ease-in-out hover:translate-x-2 divide-y cursor-pointer"
							type="button"
							onClick={copyLink}
						>
							<FiLink /> {copyText}
						</button>
						<li className="border-t border-gray" />
						<li className="flex gap-4 items-center px-[20px] py-[12px] transition-all duration-300 ease-in-out hover:translate-x-2">
							<WhatsappShareButton
								url={shareURL}
								className="flex gap-4 items-center"
							>
								<BsWhatsapp />
								Share on Whatsapp
							</WhatsappShareButton>
						</li>
						<li className="flex gap-4 items-center px-[20px] py-[12px] transition-all duration-300 ease-in-out hover:translate-x-2">
							<FacebookShareButton
								url={shareURL}
								className="flex gap-4 items-center"
							>
								<FaFacebookF size={20} /> Share on Facebook
							</FacebookShareButton>
						</li>
						<li className="flex gap-4 items-center px-[20px] py-[12px] transition-all duration-300 ease-in-out hover:translate-x-2">
							<LinkedinShareButton
								url={shareURL}
								className="flex gap-4 items-center"
							>
								<FaLinkedinIn /> Share on Linkedin
							</LinkedinShareButton>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default SocialShare;
