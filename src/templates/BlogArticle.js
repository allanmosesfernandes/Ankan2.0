/* eslint-disable react/jsx-filename-extension */
import { graphql } from "gatsby";
import React from "react";

function BlogArticle({ pageContext, data }) {
	const { id } = pageContext;
	const blogData = data.allWpPost.nodes;
	const { title, content, featuredImage, date } = blogData[0];

	return (
		<div className="max-w-screen-lg mx-auto">
			<div className="flex flex-col items-center w-full">
				<h2 className="lg:text-4xl text-3xl font-medium lg:mt-14 mt-10 leading-8 text-center">
					{title}
				</h2>
				<p className="flex items-center mr-auto my-4 italic font-medium">
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
							height: 800
							formats: WEBP
							placeholder: DOMINANT_COLOR
							layout: FULL_WIDTH
						)
					}
				}
				title
				content
			}
		}
	}
`;
