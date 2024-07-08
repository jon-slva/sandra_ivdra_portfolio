import { ReactElement } from 'react'
import classes from './DarkModeButtons.module.scss'

export default function DarkModeButtons({ darkMode, siteState, handleClick, handleSiteState }: any): ReactElement {
	return (
		<div className={classes.buttonContainer} >
			<button onClick={handleClick} className={classes.button}>
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>

			<button onClick={handleSiteState} className={classes.button}>
				{siteState === "tattoo" ? "Tattoo Logo" : "Art Logo"}
			</button>

		</div >
	)
}
