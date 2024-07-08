'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import artLogo from "../assets/logos/art_logo_2.png";
import tattooLogo from "../assets/logos/tattoo_logo_2.png";
import DarkModeButtons from "@/components/DarkModeButtons/DarkModeButtons";
import MousePosition from "@/components/MousePosition/MousePosition";
import HomeFrame from "@/components/HomeFrame/HomeFrame";
import classes from "./page.module.scss";

const artBg1 = "url(images/art/painting_1/sandra-ivdra-art-painting-1-room.jpg)"
const tattooBg1 = "url(images/tattoo/FB_IMG_1712266126903.jpg)"

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);
	const [siteState, setSiteState] = useState('tattoo');
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	// Function to update mouse position for parallax effect / changing to and from Tattoo and Art
	const updateMousePosition = (ev: { clientX: any; clientY: any; }) => {
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
		// Event listener for mouse position
		window.addEventListener("mousemove", updateMousePosition);

		return () => window.removeEventListener("mousemove", updateMousePosition);
	}, []);


	return (
		<main className={classes.main} style={{
			backgroundImage: siteState === 'tattoo' ? tattooBg1 : artBg1
		}}>

			<HomeFrame siteState={siteState} />

			{siteState === 'tattoo' ? (
				<div className={classes.tattoo}>
					<h1 className={classes.tattooHeader}>
						TATTOO ARTIST
					</h1>
				</div>
			) : (
				<div className={classes.art}>
					<h1 className={classes.artHeader}>
						FINE<br /> <span className={classes.upsideDown}>V</span>RTIST
					</h1>
				</div>
			)}

			<section className={classes.logoContainer}
				style={{
					filter: `${darkMode ? "invert(100%)" : ""}`
				}}>
				<Image src={siteState === 'tattoo' ? tattooLogo : artLogo} alt="" className={classes.logoContainerLogo} />
			</section>

			<DarkModeButtons
				darkMode={darkMode}
				handleClick={handleClick}
				siteState={siteState}
				handleSiteState={handleSiteState}
			/>

			<MousePosition
				mousePosition={mousePosition}
			/>

		</main>
	);
}