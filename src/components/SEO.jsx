import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./hooks/useSiteMetaData";

function SEO({ title, description, pathname, children, imageURL }) {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
	} = useSiteMetadata();

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: image || imageURL,
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
