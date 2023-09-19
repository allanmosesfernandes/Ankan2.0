/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import FirstFold from "../components/FirstFold";
import WhatAnkanDoes from "../components/WhatAnkanDoes";
import Brands from "../components/Brands";
import VisualMusings from "../components/VisualMusings";
import Insights from "../components/Insights";
import PlayListTakeOver from "../components/PlaylistTakeOver";

function IndexPage({ data }) {
	// Destructure data
	const { weeklyInspiration, posts } = data;

	return (
		<>
			<Header />
			<FirstFold />
			<WhatAnkanDoes />
			<Brands />
			<VisualMusings weeklyInspiration={weeklyInspiration} />
			<Insights posts={posts} />
			<PlayListTakeOver />
		</>
	);
}

export default IndexPage;
export const query = graphql`
	query MyPageQuery {
		weeklyInspiration: allWpWeeklyInspiration(limit: 5) {
			nodes {
				id
				featuredImage {
					node {
						gatsbyImage(height: 800)
					}
				}
			}
		}
		posts: allWpPost(limit: 3, sort: { fields: date, order: DESC }) {
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
						gatsbyImage(height: 800, placeholder: DOMINANT_COLOR, formats: WEBP)
					}
				}
			}
		}
	}
`;
