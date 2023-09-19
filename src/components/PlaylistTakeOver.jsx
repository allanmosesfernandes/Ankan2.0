import React from "react";
import PlayList from "../images/playlist.svg";

function PlayListTakeOver() {
	return (
		<div className="md:px-5 px-3 grid grid-cols-1 md:grid-cols-2 gap-10 my-20 md:pb-40 pb-20 container mx-auto">
			{/* Left */}
			<div className="flex flex-col gap-8">
				<img
					src={PlayList}
					alt="PlayList"
					className="md:w-[500px] w-[300px] border-4 border-b-primary pb-6"
				/>
				<p className="text-lg">
					Not saying I’m a music connoisseur, but I have been involved with
					music since the age of four making it a big part of my journey. I
					believe it’s expressive and creative, and the right song can set the
					tone for any moment. So take a peek behind the curtain and see what's
					on <span className="font-seasons text-primary">my playlist.</span>
				</p>
			</div>
			{/* Right */}
			<iframe
				title="Spotify Playlist"
				className="w-full h-[140%] flex items-center justify-center border-none outline-none"
				src="https://open.spotify.com/embed/playlist/07lXGMVRQRGJipiCS8VpRu?utm_source=generator"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			/>
		</div>
	);
}

export default PlayListTakeOver;
