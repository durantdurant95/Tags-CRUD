import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Button,
	Table,
	Select,
	Form,
	InputNumber,
	Input,
	Popconfirm,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TagController from "../TagController";
const { Option } = Select;

const TagsTable = () => {
	const { dataSource, handleAdd, handleSave, handleDelete } = TagController();
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
	const components = {
		body: {
			row: EditableRow,
			cell: EditableCell,
		},
	};

	const defaultColumns = [
		{
			title: "ID",
			dataIndex: "key",
			width: "10%",
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
		</>
	);
};
export default TagsTable;
