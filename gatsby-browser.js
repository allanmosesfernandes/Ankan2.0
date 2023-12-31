/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Layout from "./src/components/layout";
import "./src/styles/global.css";
import "@fontsource-variable/inter";

export function wrapPageElement({ element, props }) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Layout {...props}>{element}</Layout>;
}
