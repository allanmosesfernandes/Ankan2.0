import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Arrow from "../images/arrow.svg";

function Footer() {
	return (
		<footer className="flex flex-col bg-black items-center py-10 md:px-5 px-3 ">
			<h4 className="md:text-9xl text-6xl text-white">
				Say <span className="text-primary font-seasons">hello</span>
			</h4>
			{/* <img src={Arrow} alt="Arrow" className="w-[50px] mt-10" /> */}
			{/* Use gatsby image tag */}
			<StaticImage
				src="../images/arrow.svg"
				alt="Arrow"
				className="rotate-45 md:w-auto w-[80px] my-10"
			/>
		</footer>
	);
}

export default Footer;
