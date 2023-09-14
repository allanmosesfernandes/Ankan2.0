/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Header from "../components/Header";
import FirstFold from "../components/FirstFold";
import WhatAnkanDoes from "../components/WhatAnkanDoes";
import Brands from "../components/Brands";
import VisualMusings from "../components/VisualMusings";

function IndexPage() {
	return (
		<>
			<Header />
			<FirstFold />
			<WhatAnkanDoes />
			<Brands />
			<VisualMusings />
		</>
	);
}

export default IndexPage;
