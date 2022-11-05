import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import styles from "../styles/Home.module.css";

import TagController from "../tags/TagController";

export default function HomeRouter() {
	return (
		<>
			<Head>
				<title>Tags CRUD</title>
				<meta name="Tags CRUD" content="CRUD for the Tags Table" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
					crossOrigin="anonymous"
				/>
			</Head>

			<main className={styles.main}>
				<TagController />
			</main>
		</>
	);
}
