import React from "react";
import { Link } from "gatsby";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import WhiteArrow from "../images/white-arrow.svg";
import AMF from "../images/AMF.png";

function Footer() {
	return (
		<footer className="bg-black text-white text-center py-10 flex flex-col justify-center items-center">
			<p className="lg:text-9xl text-6xl">
				Say <span className="font-seasons text-primary">hello</span>
			</p>
			<img
				src={WhiteArrow}
				alt="Pink arrow"
				className="my-4 rotate-45 md:w-[100px] w-[60px]"
			/>
			{/* Social Icons */}
			<div className="flex gap-10 my-8 lg:border-0 border-2 border-white lg:p-0 p-4">
				{/* Linkedin  */}
				<a
					href="https://www.linkedin.com/in/ankanchittalipi/"
					target="_blank"
					rel="noreferrer"
					className="border-effect group transition duration-300 ease-in-out rounded-full bg-primary md:p-4 p-2 hover:bg-white"
				>
					<BiLogoLinkedin className="text-4xl transition duration-300 ease-in-out  group-hover:text-primary" />
				</a>
				{/* Instagram */}
				<a
					href="https://www.instagram.com/thecommonthread2702/?hl=en"
					target="_blank"
					rel="noreferrer"
					className="border-effect group transition duration-300 ease-in-out rounded-full bg-primary md:p-4 p-2 hover:bg-white "
				>
					<AiOutlineInstagram className="text-4xl transition duration-300 ease-in-out  group-hover:text-primary" />
				</a>

				{/* Email */}
				<a
					href="mailto:ankan.chittalipi@gmail.com"
					target="_blank"
					rel="noreferrer"
					className="group transition duration-300 ease-in-out rounded-full bg-primary md:p-4 p-2 hover:bg-white"
				>
					<BiLogoGmail className="text-4xl transition duration-300 ease-in-out  group-hover:text-primary" />
				</a>
			</div>
			{/* Footer Links */}
			<div className="flex gap-10">
				<Link to="/" className="hover-3">
					Home
				</Link>
				<Link to="/" className="hover-3">
					About
				</Link>
				<Link to="/" className="hover-3">
					Blog
				</Link>
			</div>
			{/* T&C */}
			<div className="flex flex-col items-center justify-center mt-6">
				<p className="text-sm">
					Created with ❤️ & ☕ by{" "}
					<Link to="https://allanfernandes.dev/">???</Link>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
