import { Table, Popconfirm, Space } from "antd";

export default function TagsTable({ dataSource, handleUpdate, handleDelete }) {
	const columns = [
		{
			key: "name",
			title: "Name",
			dataIndex: "name",
			width: "30%",
		},
		{
			key: "color",
			title: "Color",
			dataIndex: "color",
			width: "20%",
		},
		{
			key: "icon",
			title: "Icon",
			dataIndex: "icon",
			width: "10%",
		},
		{
			key: "order",
			title: "Order",
			dataIndex: "order",
			width: "10%",
		},
		{
			key: "type",
			title: "Type",
			dataIndex: "type",
			width: "20%",
		},
		{
			key: "operation",
			dataIndex: "operation",
			render: (_, record) =>
				dataSource.length >= 1 ? (
					<Space>
						<Popconfirm
							title="Are you sure you want to delete this tag?"
							onConfirm={() => {
								handleDelete(record.key);
								handleUpdate();
							}}
						>
							<a>Delete</a>
						</Popconfirm>
						<a>Edit</a>
					</Space>
				) : null,
		},
	];

	return (
		<>
			<Table bordered dataSource={dataSource} columns={columns} />
		</>
	);
}
