import React from "react";
import { Link } from "gatsby";

function Header() {
	return (
		<header>
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
