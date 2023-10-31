import React from "react";
import Ankan from "../images/ankan.png";
import Thread from "../images/thread.svg";

function FirstFold() {
	return (
		<div className="flex md:flex-row flex-col-reverse md:p-12 p-3 ">
			{/* Left */}
			<div className="md:w-7/12 w-full flex flex-col justify-center gap-8">
				<p className="font-gothic lg:text-8xl sm:text-6xl text-4xl hidden md:block">
					The <span className="text-primary">Common</span>
					<br />
					Thread
				</p>
				<p className="font-normal md:w-[80%] md:mt-0 mt-6 w-full leading-6 md:leading-8 md:text-lg text-sm">
					I'm Ankan - a fashion buyer, culture connoisseur, food fanatic, and a
					lifelong learner. There has always been a{" "}
					<strong className="text-primary">common thread</strong> of
					inquisitiveness which has led me on a mission to optimize people and
					processes, and I believe anything inquisitive makes the journey
					exciting. Being a person of varied interests, I have two facets that
					you can have a peek at, now that you’re here!
				</p>
			</div>
			{/* Right */}
			<div className="md:w-5/12 w-full flex flex-col relative md:h-[70vh] h-auto">
				<p className="font-gothic lg:text-8xl text-5xl md:hidden">
					The <span className="text-primary">Common</span>
					<br />
					Thread
				</p>
				<img
					src={Ankan}
					alt="Ankan"
					className="object-contain h-full md:mr-auto md:mt-auto mt-6"
				/>
			</div>
		</div>
	);
}

export default FirstFold;
