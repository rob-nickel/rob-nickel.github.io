// Filename - App.js

import React from "react";
import "./App.css";
import headshot from "./headshot.jpeg"

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src={headshot}
						/>
					</div>
					<li>
						<a href="#courses">Page 1</a>
					</li>
					<li>
						<a href="#tutorials">Page 2</a>
					</li>
					<li>
						<a href="#jobs">Page 3</a>
					</li>
					<li>
						<a href="#student">Page 4</a>
					</li>
				</ul>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							Who is Rob Nickel?
						</h1>
						<p class="text-small">
            I'm Rob, a programmer with personality
            and a knack for building connections. With a 
            passion for coding and a flair for communication,
            I bring a unique blend of technical expertise 
            and interpersonal skills to every project I tackle.
            Whether I'm crafting life-saving software or 
            recruiting promising personnel, I thrive on solving
            problems and fostering positive relationships.
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Tact for the Technical
						</h1>
						<p class="text-small">
							As a software developer I spearheaded efforts to solve
              severe pain points. Working for the largest electronic 
              health records company in the world for the last 4 years,
              I've worked closely with doctors to design, develop, and deploy
              software solutions. I served as both project manager and developer
              in order to bring the latest methodologies and technologies to
              hospitals and health clinics.
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Prowess in Persuasion
						</h1>
						<p class="text-small">
							Over the years I've honed my ability to convey ideas.
              At the University of Kansas I was a student ambassador
              and tour guide, responsible for recruiting thousands of
              potential students to Lawrence. Not only talking with
              graduating high schoolers, but their parents, alumni,
              and even recruits for the university Football team as 
              a special ambassador for them. At Epic, I've had the
              privilege to present several webinars to clinicians, 
              coworkers, and customers. These involved educating them
              on the newest technology and functionality at their 
              fingertips and encouraging them to embrace the increased
              efficiency.
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	);
}

export default App;
