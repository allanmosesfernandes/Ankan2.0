/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: "Ankan Chittalipi - Fashion Merchandiser and Buyer",
		siteUrl: "https://ankanchittalipi.com/",
		description:
			"Keep yourself updated on the Whats, Where & Whys in Fashion, Culture & Lifestyle with Ankan Chittalipi, a Fashion Merchandiser and Buyer.",
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
				icon: "src/images/icon.png",
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
