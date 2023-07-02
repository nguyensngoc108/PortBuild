import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Đi bán mè</div>
							<div className="work-subtitle">
								Em đã bán được 1 tỷ gói mè từ lúc bắt đầu <hr />học đại học rùi đó,hihi...
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">International University</div>
							<div className="work-subtitle">
								Teacher Assistant
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>
						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Ezin Insurance</div>
							<div className="work-subtitle">
								Backend Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
