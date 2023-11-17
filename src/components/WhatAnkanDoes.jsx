import React from "react";
import { Link } from "gatsby";
import PinkArrow from "../images/pinkArrow.svg";
import BlackArrow from "../images/blackArrow.svg";

import LearnMore from "./Buttons/LearnMore";
import FadeIn from 'react-fade-in';

function WhatAnkanDoes() {
	return (
		<FadeIn>
			<div className="flex flex-col md:p-12 p-3 w-full">
				<h2 className="lg:text-6xl text-3xl uppercase font-medium lg:my-14 my-10  leading-8">
					What I do
				</h2>
				<div className="grid lg:grid-cols-2 gap-8 w-full">
					{/* Card 01 */}
					<div className="flex flex-col justify-between bg-black p-6 rounded-2xl">
						<div className="flex flex-col gap-10 py-10 mt-10 border-t-2 border-[#d8d8d8]">
							<h4 className="text-white font-medium lg:text-5xl text-3xl">
								FASHION MERCHANDISER
							</h4>
							<img
								src={PinkArrow}
								alt="Pink Arrow"
								className="md:w-[100px] w-[50px]"
							/>{" "}
						</div>
						<LearnMore color="black" link="about" text="Learn More" />
					</div>
					{/* Card 02 */}
					<div className="flex flex-col justify-between bg-[#d8d8d8] p-6 rounded-2xl">
						<div className="flex flex-col gap-10 py-10 mt-10 border-t-2 border-black">
							<h4 className="text-black font-medium lg:text-5xl text-3xl">
								TREND FORECASTER
							</h4>
							<img
								src={BlackArrow}
								alt="Pink Arrow"
								className="md:w-[100px] w-[50px]"
							/>
						</div>
						<LearnMore color="white" link="blog" text="Discover Trends" />
					</div>
				</div>
			</div>
		</FadeIn>
	);
}

export default WhatAnkanDoes;
