import Head from "next/head";
import "antd/dist/antd.css";
import styles from "../styles/Home.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faUser,
	faCircleUser,
	faPerson,
	faUsers,
	faUserSecret,
	faChild,
	faUserTie,
} from "@fortawesome/free-solid-svg-icons";
library.add(
	faUser,
	faCircleUser,
	faPerson,
	faUsers,
	faUserSecret,
	faChild,
	faUserTie
);

import TagsTable from "../tags/view/TagsTable";

export default function Home() {
	return (
		<>
			<Head>
				<title>Tags CRUD</title>
				<meta name="Tags CRUD" content="CRUD for the Tags Table" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div>
					<TagsTable />
				</div>
			</main>
		</>
	);
}
