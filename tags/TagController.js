import { useState, useEffect } from "react";
import { Button } from "antd";
import { deleteTag, loadTags, postTag, updateTag } from "./service";
import TagsTable from "./view/TagsTable";
import TagsModal from "./view/TagsModal";

export default function TagController({}) {
	const [dataSource, setDataSource] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalType, setModalType] = useState("Edit");
	const [modalData, setModalData] = useState({
		name: "",
		color: "red",
		icon: "fas fa-bookmark",
		order: "1",
		type: "user",
	});
	const success = () => {
		message
			.loading("Action in progress..", 2.5)
			.then(() => message.success("Loading finished", 2.5))
			.then(() => message.info("Loading finished is finished", 2.5));
	};

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

	const showModalEdit = (record) => {
		console.log(record);
		setModalType("Edit");
		setModalData(record);
		setModalOpen(true);
	};

	const showModalAdd = (record) => {
		console.log(record);
		setModalType("Add");
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
		console.log(modalData);
		if (modalType === "Add") {
			handleAdd(modalData);
		} else {
			handleEdit(modalData);
		}
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
					onClick={showModalAdd}
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
				handleEdit={handleEdit}
				showModalEdit={showModalEdit}
			/>
			<TagsModal
				open={modalOpen}
				handleModalOk={handleModalOk}
				handleCancel={handleCancel}
				modalData={modalData}
				handleInputChange={handleInputChange}
			/>
		</>
	);
}
