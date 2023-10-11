/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
