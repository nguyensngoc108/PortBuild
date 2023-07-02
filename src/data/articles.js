import React from "react";

function article_1() {
	return {
		date: "7 May 2020",
		title: "Healthcare Mobile App",
		description:
			"Healthcare mobile app is a mobile application that allows users to book appointments with doctors, order medicines, and view their medical records. The app is built using React Native and Firebase.",
		keywords: [
			"Healthcare Mobile App",
			"Nguyen",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "21 July 2023",
		title: "VGC Mobile App",
		description:
			"A mobile app for Vietnam Golf Community to manage their members, events, and tournaments. The app is built using React Native and MongoDB.",
		style: ``,
		keywords: [
			"VGC Mobile App",
			"Golf-friend",
		],
		body: (
			<React.Fragment>
				<h1>Test</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
