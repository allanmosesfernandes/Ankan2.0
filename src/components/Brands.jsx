import React from "react";
import Marquee from "react-fast-marquee";
import Calvin from "../images/brands/ck.png";
import Gas from "../images/brands/gas.png";
import Kenneth from "../images/brands/kc.png";
import Diesel from "../images/brands/diesel.png";
import Tommy from "../images/brands/tommy.png";
import Chivas from "../images/brands/chivas.png";
import Smythson from "../images/brands/logo.png";

function Brands() {
	const brands = [
		{ src: Calvin, alt: "Calvin Klein", title: "Calvin Klein Jeans" },
		{ src: Gas, alt: "Gas Jeans", title: "Gas Jeans" },
		{ src: Kenneth, alt: "Kenneth Cole", title: "Kenneth Cole New York" },
		{ src: Diesel, alt: "Diesel", title: "Diesel" },
		{ src: Tommy, alt: "Tommy Jeans", title: "Tommy Jeans" },
		{ src: Chivas, alt: "Chivas", title: "Chivas" },
		{ src: Smythson, alt: "Smythson", title: "Smythson" },
	];

	return (
		<>
			<div className="flex flex-col md:p-12 p-3 w-full">
				<h2 className="lg:text-6xl text-3xl font-medium lg:my-14 my-10 leading-8">
					Brands I've{" "}
					<span className="text-primary font-seasons font-medium">worked</span>{" "}
					with
				</h2>
			</div>
			<Marquee
				gradient="false"
				speed="30"
				gradientWidth="0"
				className="mb-12 md:-mt-12"
			>
				{brands.map((brand) => (
					<div key={brand.title} className="brand__box">
						<img
							src={brand.src}
							alt={brand.alt}
							title={brand.title}
							className="grayscale"
						/>
					</div>
				))}
				{brands.map((brand, index) => (
					<div key={index} className="brand__box">
						<img
							src={brand.src}
							alt={brand.alt}
							title={brand.title}
							className="grayscale"
						/>
					</div>
				))}
			</Marquee>
		</>
	);
}

export default Brands;
