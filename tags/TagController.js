import { useState } from "react";
const TagController = () => {
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
	const [count, setCount] = useState(dataSource.length + 1);

	const handleDelete = (key) => {
		const newData = dataSource.filter((item) => item.key !== key);
		setDataSource(newData);
	};
	const handleAdd = () => {
		const newData = {
			key: count,
			name: "Name",
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

	return { dataSource, handleAdd, handleSave, handleDelete };
};
export default TagController;
