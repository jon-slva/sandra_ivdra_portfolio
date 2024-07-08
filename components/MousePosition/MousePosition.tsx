import { ReactElement } from 'react';
import classes from './MousePosition.module.scss';

export default function MousePosition({ mousePosition }: any): ReactElement {
	return (
		<p className={classes.mousePos}>
			Current mouse position: {mousePosition.x}, {mousePosition.y}
		</p>
	)
}