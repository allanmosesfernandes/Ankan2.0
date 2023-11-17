import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					siteUrl
					image
				}
			}
		}
	`);
	console.log(data.site.siteMetadata);
	return data.site.siteMetadata;
};

export default useSiteMetadata;
