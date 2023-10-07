/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Doggo from "../images/dog-face.png";
import Peach from "../images/peachy.png";

function About() {
	return (
		/* Introduction */
		<div className="flex flex-col md:p-5 p-3 w-full">
			<h2 className="text-6xl">
				Hi there, I'm <span className="text-primary font-seasons">Ankan.</span>
			</h2>
			<div className="flex gap-2 border-4 border-primary w-fit p-4 rounded-full items-center font-medium my-6">
				<img src={Doggo} alt="Doggo" width={30} height={30} />
				<p>Lover & Beach</p>
				<img src={Peach} alt="Peach" width={30} height={30} />
			</div>
			<div className="text-xl w-8/12 flex flex-col gap-6">
				<p>
					A strategist by heart, I specialize in{" "}
					<span className="text-primary ">buying & merchandising</span> with
					over<strong>5 years</strong> of work experience with premium
					international brands and currently widening my portfolio in the luxury
					sphere as a buyer.
				</p>
				<p>
					<span className="font-seasons">Zealous</span> about menswear &
					womenswear RTW, menswear & womenswear athleisure, menswear &
					womenswear sport, leather home & accessories.
				</p>
			</div>
		</div>
	);
}

export default About;
