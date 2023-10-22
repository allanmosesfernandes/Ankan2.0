/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Doggo from "../images/dog-face.png";
import Peach from "../images/peachy.png";
import Empathy from "../images/principles/collaborative.svg";
import Getter from "../images/principles/go-getter.svg";
import Evolving from "../images/principles/evolving.svg";
import PurplePlus from "../images/principles/purpleplus.svg";
import Skills from "../components/Skills/SkillsComponent";
import Work from "../components/Work/WorkTimeLine";

function About() {
	const [isActive, setActive] = useState(false);
	const ToggleClass = (e) => {
		const cardElement = e.target.offsetParent;
		cardElement.classList.toggle("active");
	};

	return (
		/* Introduction */
		<div className="flex flex-col md:p-12 p-3 w-full">
			<h2 className="lg:text-6xl text-4xl mb-8">
				Hi there, I'm <span className="text-primary font-seasons">Ankan.</span>
			</h2>
			<div className="lg:text-xl text-base lg:w-8/12 w-full flex flex-col gap-6">
				<p>
					A strategist by heart, I specialize in buying & merchandising with
					over 5 years of work experience with premium international brands and
					currently widening my portfolio in the luxury sphere as a buyer.
				</p>
				<p>
					<span className="font-seasons">Zealous</span> about menswear &
					womenswear RTW, menswear & womenswear athleisure, menswear &
					womenswear sport, leather home & accessories.
				</p>
				<p>
					Adept at researching the culturally driven consumer behaviour that’s
					perpetually evolving & assessing its impact on businesses globally &
					locally through acute analysis of relevant KPIs.
				</p>
			</div>
			{/* Quote */}
			<div>
				<p className="lg:text-8xl text-5xl lg:w-8/12 w-full mx-auto text-center my-10 leading-tight">
					<RiDoubleQuotesL className="mx-auto" />
					At the center of the macrocosm is a <br className="lg:hidden flex" />
					<span className="font-seasons text-primary">human truth.</span>{" "}
					<RiDoubleQuotesR className="mx-auto" />
				</p>
			</div>
			{/* Principles */}
			<section>
				<h2 className="lg:text-6xl text-4xl">Key Principles</h2>
				<p className="flex gap-2 border-4 border-primary w-fit p-4 rounded-full items-center font-medium my-6">
					I follow and believe in
				</p>
				<div className="values-container">
					<div className="values-card">
						<div className="values-inital">
							<img
								src={Evolving}
								alt="Empathy icon"
								className="w-[100px] h-[150px] mx-auto"
							/>
							<h2 className="text-2xl">Continuously evolving</h2>
						</div>
						<span className="values-text-slide">
							My sole objective lies in aiming to optimize every process and
							product and plan to make lives easier and simpler as we go along.
						</span>
						<img
							src={PurplePlus}
							alt="Plus icon"
							className="mobile-expand-button"
							onClick={ToggleClass}
							role="button"
						/>
					</div>
					<div className={isActive ? "values-card active" : "values-card"}>
						<div className="values-inital">
							<img
								src={Empathy}
								alt="Empathy icon"
								className="w-[100px] h-[150px] mx-auto"
							/>
							<h2 className="text-2xl">Driven by empathy</h2>
						</div>
						<span className="values-text-slide">
							I am a strong believer in building collaborative relationships and
							working towards a common goal through developing creative and
							disruptive ideas that impact businesses positively.
						</span>
						<img
							src={PurplePlus}
							alt="Plus icon"
							className="mobile-expand-button"
							onClick={ToggleClass}
							role="button"
						/>
					</div>
					<div className={isActive ? "values-card active " : "values-card"}>
						<div className="values-inital">
							<img
								src={Getter}
								alt="Empathy icon"
								className="md:w-[100px] w-[70px] h-[150px] mx-auto"
							/>
							<h2 className="text-2xl">High-octane go-getter</h2>
						</div>
						<span className="values-text-slide">
							I thrive in environments that involve high levels of autonomy,
							innovation, and creativity.
						</span>
						<img
							src={PurplePlus}
							alt="Plus icon"
							className="mobile-expand-button"
							onClick={ToggleClass}
							role="button"
						/>
					</div>
				</div>
			</section>
			{/* Skills */}
			<Skills />
			{/* Work  */}
			<Work />
		</div>
	);
}

export default About;
