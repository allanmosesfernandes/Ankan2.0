import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TEMP_IMAGES_WEEKLY_INSPIRATION } from "../utils/constant";

function VisualMusings() {
	// Using static query fetch images
	const data = useStaticQuery(graphql`
		query VisualMusingsQuery {
			allWpWeeklyInspiration {
				nodes {
					featuredImage {
						node {
							sourceUrl
							id
						}
					}
				}
			}
		}
	`);
	// set all images from query in this variable
	const images = data.allWpWeeklyInspiration.nodes;

	return (
		<div className="flex flex-col md:p-5 p-3 w-full bg-[#333333] gap-6">
			<h2 className="lg:text-6xl text-3xl font-medium lg:mt-14 mt-10 leading-8 text-white">
				Visual <span className="text-primary">musings</span>
			</h2>
			<p className="text-white text-lg">What's been inspiring me lately?</p>
			<div className="grid grid-cols-3 gap-3 my-5">
				{images.map((image, index) => {
					// Destructure what we need from image object
					const { sourceUrl, id } = image.featuredImage.node;
					// Gymnastics to set the image class
					const group = index % 5;
					// Set CSS classes for each group
					const highlightImage = group === 0 ? "highlight" : "secondary";
					const smallest = group === 4 ? "smally" : "";

					return (
						<div key={id} className={`${highlightImage} ${smallest}`}>
							<img
								className="h-full object-cover"
								src={sourceUrl}
								alt={`Weekly Inspiration ${index}`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default VisualMusings;
