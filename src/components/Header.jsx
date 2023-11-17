import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			setIsScrolled(offset > 50); // Set the scroll threshold as needed
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={
				isScrolled
					? "fixed top-0 left-0 right-0 z-10 bg-white shadow-md ease-in duration-300"
					: ""
			}
		>
			<nav className="md:p-5 p-3 flex flex-row items-center">
				<Link to="/">
					<h1 className="font-gothic lg:text-5xl text-3xl">
						<span className="text-primary">Ankan</span> Chittalipi
					</h1>
				</Link>
				{/* Links */}
				<div className="ml-auto flex gap-8 uppercase items-center text-sm tracking-wider">
					<Link to="/about" className="md:block hidden hover-3">
						About
					</Link>
					<Link to="/blog">
						<button
							className="tracking-wider rounded-none uppercase border w-[100px] border-black hover:bg-black hover:text-white p-2 text-black ease-in-out duration-200"
							type="button"
						>
							Blog
						</button>
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
