/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MdOutlineArrowBack } from "react-icons/md";
import he from "he";
import SEO from "../components/SEO";
import SocialShare from "../components/SocialShare/SocialShare";
import InsightsCopy from "../components/InsightsCopy";

function BlogArticle({ pageContext, data, location }) {
	const { id, articleCategory } = pageContext;
	const blogData = data.allWpPost.nodes;
	const { posts } = data;
	const postsArray = posts.edges;
	const { title, content, featuredImage, date, excerpt, categories } =
		blogData[0];
	const featurtedImageURL = featuredImage.node.mediaItemUrl;
	const { gatsbyImage } = featuredImage.node;
	const articleURL = location.href;
	/* HTML Parser */
	function stripHtmlTags(str) {
		return str.replace(/<[^>]*>/g, "");
	}
	function decodeHtmlEntities(str) {
		return str
			.replace(/&lt;/g, "<")
			.replace(/&gt;/g, ">")
			.replace(/&amp;/g, "&")
			.replace(/&quot;/g, "\"")
			.replace(/&#039;/g, "'")
			.replace(/&apos;/g, "'")
			.replace(/&hellip;/g, "…");
		// Add any other entities you need to handle
	}
	function cleanText(excerpt) {
		const noTags = stripHtmlTags(excerpt);
		return decodeHtmlEntities(noTags);
	}
	const cleanExcerpt = cleanText(excerpt);
	console.log(cleanExcerpt);
	return (
		<>
			<div className="fullBleed relative text-white md:p-6 p-0 md:h-[500px] h-[400px] flex justify-center items-center md:mb-16 mb-8">
				<Link to="/blog" className="absolute left-5 top-5">
					<MdOutlineArrowBack size={30} />
				</Link>
				<h2 className="lg:text-6xl text-3xl font-medium  leading-normal text-center md:w-8/12 w-12/12 md:mt-0 -mt-[2rem]">
					{title}
				</h2>
			</div>
			<div className="max-w-screen-lg mx-auto">
				<SEO
					title={title}
					description={cleanExcerpt}
					imageURL={featurtedImageURL}
				/>
				<div className="flex flex-col items-center w-full md:px-5 px-3">
					<div className="flex justify-between w-full items-center border-t border-b border-black mb-8">
						<p className="flex items-center mr-auto my-4 font-medium">
							{" "}
							<hr className="bg-primary w-[20px] mr-4 border-primary" />
							{date}
						</p>
						<SocialShare
							shareURL={articleURL}
							name={title}
							featuredImage={featurtedImageURL}
							description={cleanExcerpt}
						/>
					</div>
					<div
						dangerouslySetInnerHTML={{ __html: content }}
						className="wp-content-img leading-9 flex flex-col gap-2 mb-[5rem]"
					/>
				</div>
			</div>
			<InsightsCopy posts={postsArray} category={articleCategory} />
		</>
	);
}
/* G9zdDo5Ng== */
export default BlogArticle;
export const combinedQuery = graphql`
	query CombinedQuery($id: String!, $articleCategory: String!) {
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
				categories {
					nodes {
						name
					}
				}
			}
		}

		posts: allWpPost(
			limit: 3
			filter: {
				id: { ne: $id }
				categories: { nodes: { elemMatch: { name: { eq: $articleCategory } } } }
			}
		) {
			edges {
				node {
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
	}
`;
