/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: "The Common Thread by Ankan Chittalipi",
		siteUrl: "https://ankanchittalipi.com/",
		description:
			"Keep yourself updated on the Whats, Where & Whys in Fashion, Culture & Lifestyle with Ankan Chittalipi, a Fashion Merchandiser and Buyer.",
		image:
			"http://blog.ankanchittalipi.com/wp-content/uploads/2023/05/blue-bg-compressed.png",
	},
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "https://blog.ankanchittalipi.com/graphql",
			},
		},
		{
			resolve: "gatsby-transformer-json",
			options: {
				typeName: "Json", // a fixed string
			},
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-postcss",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/favicon.ico",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
