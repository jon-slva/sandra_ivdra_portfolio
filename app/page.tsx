'use client';

import "./page.scss";
import { useState } from "react";
import artLogo from "../assets/logos/art_logo.png";
import tattooLogo from "../assets/logos/tattoo_logo.png";


export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const [logoState, setLogoState] = useState(false);

	const handleClick = () => {
		setDarkMode(!darkMode);
	}

	const handleLogo = () => {
		setDarkMode(!darkMode);
	}

	return (
		<main className="main" style={{
			backgroundImage: "url(/images/art/painting_1/FB_IMG_1712266614230.jpg)"
		}}>

			<section className="tattoo">
				<h1 className="tattoo__header">
					Tattoo Artist
				</h1>
			</section>
			<section className="art">
				<h1 className="art__header">
					Fine Artist
				</h1>
			</section>
			<section className="logo-container"
				style={{
					filter: `${darkMode ? "invert(100%)" : ""}`
				}}>
				<img src={artLogo.src} alt="" className="logo-container__logo" />
			</section>

			<button onClick={handleClick} className="button">
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>

			<button onClick={handleLogo} className="button">
				{darkMode ? "Art Logo" : "Tattoo Logo"}
			</button>

		</main>
	);
}