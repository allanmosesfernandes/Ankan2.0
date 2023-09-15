import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Star from "../images/star.png";

function Insights() {
	const posts = useStaticQuery(graphql`
		query MyQuery {
			allWpPost(limit: 3, sort: { date: DESC }) {
				nodes {
					id
					slug
					title
					date(formatString: "MMMM DD, YYYY")
					categories {
						nodes {
							name
						}
					}
					featuredImage {
						node {
							gatsbyImage(
								height: 800
								placeholder: DOMINANT_COLOR
								formats: WEBP
							)
						}
					}
				}
			}
		}
	`);
	const postsArray = posts.allWpPost.nodes;
	return (
		<div className="flex flex-col bg-black text-white items-center md:px-5 px-3 w-full py-6">
			<div className="flex flex-col md:gap-4 gap-2 lg:text-6xl text-3xl font-medium text-center">
				<h4 className="relative flex items-center justify-center gap-4">
					I've got
					<span>
						<img
							src={Star}
							alt="Star"
							className=" w-[50px] animate-spin-slow"
						/>{" "}
					</span>
				</h4>
				<p className=" text-primary font-seasons">exciting insight</p>
				<p className="">
					for <span className="font-seasons">you</span>
				</p>
			</div>
			<div className="grid grid-cols-3 gap-10 mt-10">
				{postsArray.map((post) => {
					const { id, slug, title, featuredImage, date } = post;
					// Get category name
					const image = getImage(featuredImage.node.gatsbyImage);
					return (
						<Link to={`blog/${slug}`}>
							<div key={id} className="flex flex-col gap-6 h-full">
								<GatsbyImage
									image={image}
									alt={title}
									className="h-[250px] object-center object-cover grayscale hover:grayscale-0 ease-in-out duration-300"
								/>
								<h4 className="text-lg">{title}</h4>
								<div className="flex items-center mt-auto italic text-sm">
									<hr className="bg-primary w-[20px] mr-4 border-primary" />
									{date}
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Insights;
