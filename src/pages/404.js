/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";

function FourOhFour() {
	return (
		<>
			<SEO title="404" />
			<div className="md:px-5 px-3 flex flex-col gap-6">
				<p className="text-primary text-6xl mt-4">Page Not found</p>
				<p>Oops! Looks like you've hit a dead end.</p>
				<Link to="/" className="mb-6 underline">
					<button
						className="tracking-wider rounded-none uppercase border w-[100px] border-black hover:bg-black hover:text-white p-2 text-black ease-in-out duration-200"
						type="button"
					>
						home
					</button>
				</Link>
			</div>
		</>
	);
}

export default FourOhFour;
