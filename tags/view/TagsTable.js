import { Table, Popconfirm, Space, Button } from "antd";

export default function TagsTable({
	loading,
	dataSource,
	handleUpdate,
	handleDelete,
	showModalEdit,
}) {
	const columns = [
		{
			key: "name",
			title: "Name",
			dataIndex: "name",
			width: "20%",
		},
		{
			key: "color",
			title: "Color",
			dataIndex: "color",
			width: "10%",
		},
		{
			key: "icon",
			title: "Icon",
			dataIndex: "icon",
			width: "20%",
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
			width: "10%",
		},
		{
			key: "operation",
			title: "Actions",
			dataIndex: "operation",
			width: "10%",
			render: (_, record) =>
				dataSource.length >= 1 ? (
					<Space>
						<Button
							onClick={() => {
								showModalEdit(record);
							}}
						>
							Edit
						</Button>
						<Popconfirm
							title="Are you sure you want to delete this tag?"
							onConfirm={() => {
								handleDelete(record.key);
								handleUpdate();
							}}
						>
							<Button danger>Delete</Button>
						</Popconfirm>
					</Space>
				) : null,
		},
	];

	return (
		<>
			<Table
				bordered
				loading={loading}
				dataSource={dataSource}
				columns={columns}
			/>
		</>
	);
}
