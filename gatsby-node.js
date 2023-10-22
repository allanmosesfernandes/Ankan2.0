const { graphql } = require("gatsby");
const path = require("path");

// Turn posts into pages
async function turnPostsIntoPages({ graphql, actions }) {
	// 1. Get a template for this page
	const blogTemplate = path.resolve("./src/templates/BlogArticle.js");
	// 2. Query all posts
	const { data } = await graphql(`
		query MyQuery {
			allWpPost {
				nodes {
					id
					slug
					uri
					categories {
						nodes {
							name
						}
					}
				}
			}
		}
	`);

	// Creating Individual Blog Pages
	// 3. Loop over each post and create a page for that post
	data.allWpPost.nodes.forEach((post) => {
		const articleCategory = post.categories.nodes[0]?.name || "";  // Get the first category name or default to an empty string
		actions.createPage({
			// What is the URL for this new page??
			path: `blog/${post.slug}`,
			component: blogTemplate,
			context: {
				id: post.id,
				articleCategory,
			},
		});
	});
}

exports.createPages = async (params) => {
	await turnPostsIntoPages(params);
};
