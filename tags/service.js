import axios from "axios";
// import newTag from "./TagController";

const apiURL = "https://635c5d83f0bc26795bfdcf28.mockapi.io/Tags";
export const loadTags = async () => {
	try {
		const data = await axios.get(apiURL);
		return data.data;
	} catch (error) {
		console.error("error", error);
	}
};

export const deleteTag = async (key) => {
	try {
		await axios.delete(`${apiURL}/${key}`);
	} catch (error) {
		console.error("error", error);
	}
};

export const postTag = async (tag) => {
	await axios.post(apiURL, {
		name: tag.name,
		color: tag.color,
		icon: tag.icon,
		order: tag.order,
		type: tag.type,
	});
};

export const updateTag = async (tag) => {
	axios.put(`${apiURL}/${tag}`, {
		name: tag.name,
		color: tag.color,
		icon: tag.icon,
		order: tag.order,
		type: tag.type,
	});
};
