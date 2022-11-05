import { useState, useEffect } from "react";
import { Button } from "antd";
import { deleteTag, loadTags, postTag } from "./service";
import TagsTable from "./view/TagsTable";
import TagsModal from "./view/TagsModal";

export default function TagController({}) {
	const [dataSource, setDataSource] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalData, setModalData] = useState({
		name: "",
		color: "",
		icon: "",
		order: "",
		type: "",
	});

	useEffect(() => {
		handleUpdate();
	}, []);

	const handleUpdate = () => {
		loadTags()
			.then((value) => setDataSource(value))
			.catch((reason) => {
				// TODO: error manager
				// ant D.
			});
	};

	const handleDelete = (key) => {
		deleteTag(key).then(() => {
			handleUpdate();
		});
	};

	const showModal = (record) => {
		console.log(record);
		setModalData(record);
		setModalOpen(true);
	};

	const handleCancel = () => {
		setModalOpen(false);
	};

	const handleAdd = (tag) => {
		postTag(tag).then(() => {
			handleUpdate();
		});
	};

	const handleEdit = (tag) => {
		updateTag(tag).then(() => {
			handleUpdate();
		});
	};

	const handleModalOk = () => {
		//TODO: Set async await here to wait for uploading data
		console.log(modalData);
		handleAdd(modalData);
		setModalOpen(false);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setModalData({
			...modalData,
			[name]: value,
		});
	};

	return (
		<>
			<h1 style={{ textAlign: "center" }}>Tags Controller</h1>
			<div style={{ textAlign: "right" }}>
				<Button
					type="primary"
					onClick={showModal}
					style={{
						marginBottom: 16,
					}}
				>
					<i style={{ marginRight: 10 }} className="fas fa-user-plus"></i>
					Add new Tag
				</Button>
			</div>

			<TagsTable
				dataSource={dataSource}
				handleUpdate={handleUpdate}
				handleDelete={handleDelete}
				showModal={showModal}
			/>
			<TagsModal
				showModal={showModal}
				open={modalOpen}
				handleModalOk={handleModalOk}
				handleCancel={handleCancel}
				modalData={modalData}
				handleInputChange={handleInputChange}
			/>
		</>
	);
}
