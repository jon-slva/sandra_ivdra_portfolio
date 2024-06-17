'use client';

import "./page.scss";
import { useEffect, useState } from "react";
import artLogo from "../assets/logos/art_logo.png";
import tattooLogo from "../assets/logos/tattoo_logo.png";
import Image from "next/image";


const artBg1 = "url(/images/art/painting_1/FB_IMG_1712266614230.jpg)"
const tattooBg1 = "url(/images/tattoo/FB_IMG_1712266126903.jpg)"


export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const [siteState, setSiteState] = useState('tattoo');
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });


	const updateMousePosition = ev => {
		setMousePosition({ x: ev.clientX, y: ev.clientY });
	};

	const handleClick = () => {
		setDarkMode(!darkMode);
	}

	const handleSiteState = () => {
		if (siteState == 'tattoo') {
			setSiteState('art');
		} else {
			setSiteState('tattoo');
		}
	}

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () => window.removeEventListener("mousemove", updateMousePosition);
	}, []);


	return (
		<main className="main" style={{
			backgroundImage: siteState === 'tattoo' ? tattooBg1 : artBg1
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
				<Image src={siteState === 'tattoo' ? tattooLogo : artLogo} alt="" className="logo-container__logo" />
			</section>

			<div style={{
				position: "absolute",
				right: "8px",
				top: "8px",
				display: "flex",
				gap: "8px"
			}}>
				<button onClick={handleClick} className="button">
					{darkMode ? "Light Mode" : "Dark Mode"}
				</button>

				<button onClick={handleSiteState} className="button">
					{darkMode ? "Art Logo" : "Tattoo Logo"}
				</button>

			</div>
			<p style={{
				position: "absolute",
				bottom: "8px",
				left: "8px",
				color: "white"

			}}>Current mouse position: {mousePosition.x}, {mousePosition.y}</p>

		</main>
	);
}