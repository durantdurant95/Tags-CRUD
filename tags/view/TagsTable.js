import { Table, Popconfirm, Space, Button, Tooltip } from "antd";

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
						<Tooltip title="Edit">
							<Button
								icon={<i className="fas fa-pen-fancy"></i>}
								// type="primary"
								onClick={() => {
									showModalEdit(record);
								}}
							/>
						</Tooltip>
						<Popconfirm
							title="Are you sure you want to delete this tag?"
							onConfirm={() => {
								handleDelete(record.key);
								handleUpdate();
							}}
						>
							<Tooltip title="Delete">
								<Button
									icon={<i className="fas fa-trash"></i>}
									// type="primary"
									danger
								/>
							</Tooltip>
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
