import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./hooks/useSiteMetaData";

function SEO({ title, description, pathname, children, imageURL }) {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image: defaultImage,
		siteUrl,
	} = useSiteMetadata();

	// Replace encoded typographic apostrophes with regular apostrophes
	const formattedDescription = description
		? description.replace(/&#8217;/g, "'")
		: defaultDescription;

	const seo = {
		title: title || defaultTitle,
		description: formattedDescription,
		image: imageURL || defaultImage,
		url: `${siteUrl}${pathname || ""}`,
	};
	return (
		<Helmet>
			<html lang="en" />
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="og:image" content={seo.image} />
			<meta name="theme-color" content="#ff5757" />
			<meta property="og:title" content={title} key="ogtitle" />
			<meta
				property="og:site_name"
				content="The Common Thread by Ankan Chittalipi"
				key="ogsitename"
			/>
			{children}
		</Helmet>
	);
}

export default SEO;
