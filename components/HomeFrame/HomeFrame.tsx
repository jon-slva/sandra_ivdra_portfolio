import { ReactElement } from 'react';
import Image from 'next/image';
import classes from './HomeFrame.module.scss'

import artFrameLeft from '../../assets/trunk-1.png'
import artFrameRight from '../../assets/trunk-3.png'


export default function HomeFrame({ siteState }: any): ReactElement {

	return (
		<div className={classes.frameContainer}>
			<Image src={artFrameLeft} alt="" className={classes.artFrameLeft} />
			<Image src={artFrameRight} alt="" className={classes.artFrameRight} />
		</div>
	)
};