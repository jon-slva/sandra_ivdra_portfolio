import styles from "./styles/page.module.scss"

export default function Home() {
	return (
		<main className={styles.main}>

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
			<section className="logo-container">
				<img src="../assets/logo.png" alt="" className="logo" />
			</section>

		</main>
	);
}