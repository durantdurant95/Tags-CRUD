import { Modal, Form, Input, Radio, Row } from "antd";

export default function TagsModal({
	open,
	handleModalOk,
	handleCancel,
	newTag,
	handleInputChange,
}) {
	const [form] = Form.useForm();

	return (
		<>
			<Modal
				title="Add a new Tag"
				open={open}
				onOk={handleModalOk}
				onCancel={handleCancel}
				okText="Save Tag"
			>
				<Form
					form={form}
					layout="horizontal"
					name="form_in_modal"
					initialValues={{
						modifier: "public",
					}}
				>
					<Form.Item label="Name">
						<Input
							name="name"
							placeholder="Name"
							value={newTag.name}
							onChange={handleInputChange}
						/>
					</Form.Item>
					<Form.Item label="Color">
						<Radio.Group optionType="button" name="color" initialValues="blue">
							<Row>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "red" }}
									value="red"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "orange" }}
									value="orange"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "yellow" }}
									value="yellow"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "green" }}
									value="green"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "cyan" }}
									value="cyan"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "blue" }}
									value="blue"
								></Radio>
							</Row>
							<Row>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "purple" }}
									value="purple"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "salmon" }}
									value="salmon"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "violet" }}
									value="violet"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "tan" }}
									value="tan"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "gray" }}
									value="gray"
								></Radio>
								<Radio
									onChange={handleInputChange}
									style={{ backgroundColor: "pink" }}
									value="pink"
								></Radio>
							</Row>
						</Radio.Group>
					</Form.Item>
					<Form.Item type="checkbox" label="Icon">
						<>
							<Radio.Group
								name="icon"
								onChange={handleInputChange}
								optionType="button"
							>
								<Row>
									<Radio onChange={handleInputChange} value="fas fa-bookmark">
										<i className="fas fa-bookmark"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-map-pin">
										<i className="fas fa-map-pin"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-gift">
										<i className="fas fa-gift"></i>
									</Radio>

									<Radio
										onChange={handleInputChange}
										value="fas fa-graduation-cap"
									>
										<i className="fas fa-graduation-cap"></i>
									</Radio>
									<Radio
										onChange={handleInputChange}
										value="fas fa-suitcase-rolling"
									>
										<i className="fas fa-suitcase-rolling"></i>
									</Radio>
									<Radio
										onChange={handleInputChange}
										value="fas fa-ruler-vertical"
									>
										<i className="fas fa-ruler-vertical"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-file">
										<i className="fas fa-file"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-book-open">
										<i className="fas fa-book-open"></i>
									</Radio>
								</Row>
								<Row>
									<Radio
										onChange={handleInputChange}
										value="fas fa-credit-card"
									>
										<i className="fas fa-credit-card"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-money-bill">
										<i className="fas fa-money-bill"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-dumbbell">
										<i className="fas fa-dumbbell"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-utensils">
										<i className="fas fa-utensils"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-wine-glass">
										<i className="fas fa-wine-glass"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-pills">
										<i className="fas fa-pills"></i>
									</Radio>
									<Radio
										onChange={handleInputChange}
										value="fas fa-stethoscope"
									>
										<i className="fas fa-stethoscope"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-chair">
										<i className="fas fa-chair"></i>
									</Radio>
								</Row>
								<Row>
									<Radio onChange={handleInputChange} value="fas fa-building">
										<i className="fas fa-building"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-landmark">
										<i className="fas fa-landmark"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-tv">
										<i className="fas fa-tv"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-music">
										<i className="fas fa-music"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-gamepad">
										<i className="fas fa-gamepad"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-headphones">
										<i className="fas fa-headphones"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-leaf">
										<i className="fas fa-leaf"></i>
									</Radio>
									<Radio onChange={handleInputChange} value="fas fa-carrot">
										<i className="fas fa-carrot"></i>
									</Radio>
								</Row>
							</Radio.Group>
						</>
					</Form.Item>
					<Form.Item label="Order">
						<Input
							name="order"
							placeholder="Order"
							value={newTag.order}
							onChange={handleInputChange}
						/>
					</Form.Item>
					<Form.Item
						name="type"
						label="Type"
						className="collection-create-form_last-form-item"
					>
						<Radio.Group name="type">
							<Radio onChange={handleInputChange} value="user">
								User
							</Radio>
							<Radio onChange={handleInputChange} value="tag">
								Tag
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}
