/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image"; // Ensure this import if it's not already present
import { Link, graphql } from "gatsby";

function Blog({ data }) {
	const allBlogArticles = data.allWpPost.nodes;
	return (
		<div className="md:px-5 px-3 lg:w-9/12 w-11/12 mx-auto">
			<h2 className="text-6xl my-6">
				Sometimes I <span className="font-seasons text-primary">write</span>{" "}
				about stuff that just makes sense-
			</h2>
			{allBlogArticles.map((article, index) => {
				const { id, slug, title, featuredImage, excerpt, categories, date } =
					article;
				const category = categories.nodes[0].name;
				const image = getImage(featuredImage.node.gatsbyImage);
				const cleanedExcerpt = excerpt.replace("[&hellip;]", "");
				return (
					<Link to={`${slug}`}>
						<div key={id} className="flex  my-12 pb-10 border-b-2 border-gray">
							{/* left */}
							<div className="flex flex-col gap-4 w-8/12">
								<p className="text-sm">{date}</p>
								<p className="font-bold md:text-xl text-md">{title}</p>
								<div
									dangerouslySetInnerHTML={{ __html: cleanedExcerpt }}
									className="hidden md:block"
								/>
								<p className="font-seasons border border-primary w-fit p-2">
									{category}
								</p>
							</div>
							<div className="ml-auto justify-center flex flex-col">
								<GatsbyImage
									image={image}
									alt={title}
									className="md:w-auto w-[100px]"
								/>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
// Ensure to export your component to use it elsewhere

export const query = graphql`
	query MyQuery {
		allWpPost {
			nodes {
				id
				slug
				tags {
					nodes {
						name
					}
				}
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
							width: 200
							height: 200
							placeholder: DOMINANT_COLOR
							formats: WEBP
						)
					}
				}
				excerpt
				categories {
					nodes {
						name
					}
				}
			}
		}
	}
`;
export default Blog;
