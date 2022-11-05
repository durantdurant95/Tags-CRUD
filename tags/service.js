import axios from "axios";
import newTag from "./TagController";
export const loadTags = async () => {
	try {
		const data = await axios.get(
			"https://635c5d83f0bc26795bfdcf28.mockapi.io/Tags"
		);
		// console.log(data.data);
		return data.data;
	} catch (error) {
		console.error("error", error);
	}
};

export const deleteTag = async (key) => {
	await axios.delete(`https://635c5d83f0bc26795bfdcf28.mockapi.io/Tags/${key}`);
};

export const postTag = async () => {
	axios.post("https://635c5d83f0bc26795bfdcf28.mockapi.io/Tags", {
		name: newTag.name,
		color: newTag.color,
		icon: newTag.icon,
		order: newTag.order,
		type: newTag.type,
	});
};
