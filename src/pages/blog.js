import { graphql } from "gatsby";
import React from "react";

const blog = ({ data }) => {
	const allBlogArticles = data.allWpPost.nodes;
	return <div>blog</div>;
};

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
			}
		}
	}
`;
export default blog;
