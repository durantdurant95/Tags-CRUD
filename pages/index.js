import React, { useContext, useEffect, useRef, useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Button,
	Form,
	Input,
	Popconfirm,
	Select,
	InputNumber,
	Table,
} from "antd";

const { Option } = Select;

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
	const [form] = Form.useForm();
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	);
};

const EditableCell = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	handleSave,
	...restProps
}) => {
	const [editing, setEditing] = useState(false);
	const inputRef = useRef(null);
	const form = useContext(EditableContext);
	useEffect(() => {
		if (editing) {
			inputRef.current.focus();
		}
	}, [editing]);
	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({
			[dataIndex]: record[dataIndex],
		});
	};
	const save = async () => {
		try {
			const values = await form.validateFields();
			toggleEdit();
			handleSave({
				...record,
				...values,
			});
		} catch (errInfo) {
			console.log("Save failed:", errInfo);
		}
	};
	let childNode = children;
	if (editable) {
		childNode = editing ? (
			<Form.Item
				style={{
					margin: 0,
				}}
				name={dataIndex}
				rules={[
					{
						required: true,
						message: `${title} is required.`,
					},
				]}
			>
				<Input ref={inputRef} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : (
			<div className="editable-cell-value-wrap" onClick={toggleEdit}>
				{children}
			</div>
		);
	}
	return <td {...restProps}>{childNode}</td>;
};

export default function Home() {
	const [dataSource, setDataSource] = useState([
		{
			key: "1",
			name: "Rober",
			color: "blue",
			icon: "fas fa-user",
			order: 1,
			type: "user",
		},
		{
			key: "2",
			name: "May",
			color: "blue",
			icon: "fas fa-user",
			order: 1.03,
			type: "user",
		},
		{
			key: "3",
			name: "Alex",
			color: "blue",
			icon: "fas fa-user",
			order: 1,
			type: "user",
		},
	]);

	const [count, setCount] = useState(4);

	const handleDelete = (key) => {
		const newData = dataSource.filter((item) => item.key !== key);
		setDataSource(newData);
	};

	const defaultColumns = [
		{
			title: "ID",
			dataIndex: "key",
			width: "10%",
			editable: false,
		},

		{
			title: "Name",
			dataIndex: "name",
			width: "30%",
			editable: true,
		},
		{
			title: "Color",
			dataIndex: "color",
			width: "20%",
			editable: false,
			render: () => (
				<Select defaultValue="Blue" bordered={false}>
					<Option value="Blue">Blue</Option>
					<Option value="Red">Red</Option>
					<Option value="Green">Green</Option>
					<Option value="Yellow">Yellow</Option>
				</Select>
			),
		},
		{
			title: "Icon",
			dataIndex: "icon",
			width: "10%",
			editable: false,
			render: () => (
				<Select bordered={false}>
					<Option value="fa-solid fa-user">
						<FontAwesomeIcon icon="fa-solid fa-user" />
					</Option>
					<Option value="fa-solid fa-circle-user">
						<FontAwesomeIcon icon="fa-solid fa-circle-user" />
					</Option>
					<Option value="fa-solid fa-person">
						<FontAwesomeIcon icon="fa-solid fa-person" />
					</Option>
					<Option value="fa-solid fa-circle-users">
						<FontAwesomeIcon icon="fa-solid fa-users" />
					</Option>
					<Option value="fa-solid fa-circle-user-secret">
						<FontAwesomeIcon icon="fa-solid fa-user-secret" />
					</Option>
					<Option value="fa-solid fa-child">
						<FontAwesomeIcon icon="fa-solid fa-child" />
					</Option>
				</Select>
			),
		},
		{
			title: "Order",
			dataIndex: "order",
			width: "10%",
			editable: false,
			render: () => (
				<Form.Item name="order" noStyle>
					<InputNumber min={1} max={1000} />
				</Form.Item>
			),
		},
		{
			title: "Type",
			dataIndex: "type",
			width: "20%",
			editable: false,
			render: () => (
				<Select defaultValue="user" bordered={false}>
					<Option value="user">user</Option>
					<Option value="tag">tag</Option>
				</Select>
			),
		},
		{
			dataIndex: "operation",
			render: (_, record) =>
				dataSource.length >= 1 ? (
					<Popconfirm
						title="Are you sure you want to delete this tag?"
						onConfirm={() => handleDelete(record.key)}
					>
						<a>Delete</a>
					</Popconfirm>
				) : null,
		},
	];
	const handleAdd = () => {
		const newData = {
			key: count,
			name: "Alex",
			color: "blue",
			icon: "fas fa-user",
			order: 1,
			type: "user",
		};
		setDataSource([...dataSource, newData]);
		setCount(count + 1);
	};
	const handleSave = (row) => {
		const newData = [...dataSource];
		const index = newData.findIndex((item) => row.key === item.key);
		const item = newData[index];
		newData.splice(index, 1, {
			...item,
			...row,
		});
		setDataSource(newData);
	};
	const components = {
		body: {
			row: EditableRow,
			cell: EditableCell,
		},
	};
	const columns = defaultColumns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record) => ({
				record,
				editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				handleSave,
			}),
		};
	});
	return (
		<>
			<Head>
				<title>Tags CRUD</title>
				<meta name="Tags CRUD" content="CRUD for the Tags Table" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div>
					<Table
						components={components}
						rowClassName={() => "editable-row"}
						bordered
						dataSource={dataSource}
						columns={columns}
					/>

					<Button
						onClick={handleAdd}
						type="primary"
						style={{
							marginBottom: 16,
						}}
					>
						Add new Tag
					</Button>
				</div>
			</main>
		</>
	);
}
