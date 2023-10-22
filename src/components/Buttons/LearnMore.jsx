import { Link } from "gatsby";
import React from "react";

function LearnMore({ color, link, text }) {
	return (
		<Link to={`${link}`}>
			<button
				type="button"
				className={`bg-transparent md:w-[250px] w-[190px]  px-4 py-4 rounded uppercase tracking-wider font-medium md:text-lg text-sm ease-in-out duration-200 ${
					color === "black"
						? "text-white border border-white hover:text-black hover:border-black hover:bg-white"
						: "text-black border border-black hover:text-white hover:border-white hover:bg-black"
				}`}
			>
				{text}
			</button>
		</Link>
	);
}

LearnMore.defaultProps = {
	color: "black",
	link: "/",
	text: "Learn More",
};

export default LearnMore;
