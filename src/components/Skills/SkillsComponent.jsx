import React from "react";
// import "./skills.scss";
import Robot from "../../images/skills/robot.png";
import Analysis from "../../images/skills/analysis.png";
import Tools from "../../images/skills/digital-tools.png";
import ERP from "../../images/skills/erp.png";

function SkillsComponent() {
	return (
		<div className="skills-container lg:my-10 my-6">
			<h2 className="lg:text-6xl text-4xl"> Skills / Tools </h2>
			<div className="skills__block__container">
				<div className="skills__tools__left">
					<div className="icons">
						<img src={Analysis} alt="Analysis" />
						<div className="skills__details">
							<h3 className="text-primary font-bold mb-3">Analysis </h3>
							<p>
								As part of my portfolio, I possess a strong command of a range
								of analysis tools, including <span>MS Excel</span>,{" "}
								<span>Power BI</span>, <span>Tableau</span>, and{" "}
								<span>PLM software</span>, which enable me to perform efficient
								and accurate data analysis.
							</p>
						</div>
					</div>
					<div className="icons">
						<img src={ERP} alt="Analysis" />
						<div className="skills__details">
							<h3 className="text-primary font-bold mb-3">ERP Tools</h3>
							<p>
								With my proficiency in ERP tools, I am adept in utilizing{" "}
								<span>SAP Logon</span> to streamline and optimize various
								business processes, resulting in improved efficiency and
								productivity.
							</p>
						</div>
					</div>
				</div>

				<img src={Robot} alt="Tools" className="floater" />

				<div className="skills__tools__left">
					<div className="icons">
						<img src={Tools} alt="Analysis" />
						<div className="skills__details">
							<h3 className="text-primary font-bold mb-3">Digital Tools</h3>
							<p>
								As an individual with a strong expertise in digital and
								presentation tools, my skills encompass{" "}
								<span>Adobe Creative Suite</span>, <span>MS Word</span>, and{" "}
								<span>MS Powerpoint</span>, enabling me to produce engaging and
								visually appealing content for various purposes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsComponent;
