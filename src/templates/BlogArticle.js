/* eslint-disable react/jsx-filename-extension */
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import SEO from "../components/SEO";

function BlogArticle({ pageContext, data }) {
	const { id } = pageContext;
	const blogData = data.allWpPost.nodes;
	const { title, content, featuredImage, date, excerpt } = blogData[0];
	const featurtedImageURL = featuredImage.node.mediaItemUrl;
	const { gatsbyImage } = featuredImage.node;

	return (
		<>
			<div className="fullBleed bg-tertiary text-white p-6 lg:h-[500px] h-[450px] flex justify-center items-center">
				<h2 className="lg:text-6xl text-3xl font-medium  leading-8 text-center md:w-8/12 w-10/12">
					{title}
				</h2>
			</div>
			<div className="max-w-screen-lg mx-auto">
				<SEO title={title} description={excerpt} imageURL={featurtedImageURL} />
				<div className="flex flex-col items-center w-full md:px-5 px-3">
					<p className="flex items-center mr-auto my-4 font-medium">
						{" "}
						<hr className="bg-primary w-[20px] mr-4 border-primary" />
						{date}
					</p>
					<div
						dangerouslySetInnerHTML={{ __html: content }}
						className="wp-content-img leading-9 flex flex-col gap-2 mb-[5rem]"
					/>
				</div>
			</div>
		</>
	);
}

export default BlogArticle;
export const query = graphql`
	query MyQuery($id: String!) {
		allWpPost(filter: { id: { eq: $id } }) {
			nodes {
				date(formatString: "MMMM DD, YYYY")
				featuredImage {
					node {
						mediaItemUrl
						gatsbyImage(
							height: 600
							formats: WEBP
							placeholder: DOMINANT_COLOR
							layout: FULL_WIDTH
						)
					}
				}
				title
				content
				excerpt
			}
		}
	}
`;
