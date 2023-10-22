/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import SocialShare from "../components/SocialShare/SocialShare";

function BlogArticle({ pageContext, data, location }) {
	const { id } = pageContext;
	const blogData = data.allWpPost.nodes;
	const { title, content, featuredImage, date, excerpt } = blogData[0];
	const featurtedImageURL = featuredImage.node.mediaItemUrl;
	const { gatsbyImage } = featuredImage.node;
	const articleURL = location.href;
	return (
		<>
			<div className="fullBleed bg-tertiary text-white md:p-6 p-0 md:h-[500px] h-[400px] flex justify-center items-center md:mb-16 mb-8">
				<h2 className="lg:text-6xl text-3xl font-medium  leading-normal text-center md:w-8/12 w-10/12">
					{title}
				</h2>
			</div>
			<div className="max-w-screen-lg mx-auto">
				<SEO title={title} description={excerpt} imageURL={featurtedImageURL} />
				<div className="flex flex-col items-center w-full md:px-5 px-3">
					<div className="flex justify-between w-full items-center border-t border-b border-black mb-8">
						<p className="flex items-center mr-auto my-4 font-medium">
							{" "}
							<hr className="bg-primary w-[20px] mr-4 border-primary" />
							{date}
						</p>
						<SocialShare shareURL={articleURL} />
					</div>
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
