import { useState } from "react";
import {
	Modal,
	Form,
	Input,
	Radio,
	Row,
	InputNumber,
	Popover,
	Button,
} from "antd";

export default function TagsModal({
	open,
	handleModalOk,
	handleCancel,
	modalData,
	handleInputChange,
}) {
	const [form] = Form.useForm();
	const [openPop, setOpenPop] = useState(false);
	const hidePop = () => {
		setOpenPop(false);
	};
	const handleOpenChange = (newOpen) => {
		setOpenPop(newOpen);
	};

	return (
		<>
			<Modal
				title="Tag Info"
				okText="Save"
				open={open}
				onCancel={handleCancel}
				destroyOnClose={true}
				onOk={() => {
					form
						.validateFields()
						.then((values) => {
							form.resetFields();
							handleModalOk(values);
						})
						.catch((info) => {
							console.log("Validate Failed:", info);
						});
				}}
			>
				<Form
					form={form}
					layout="horizontal"
					initialValues={{
						name: "",
						color: "blue",
						icon: "fas fa-map-pin",
						order: 0,
						type: "tag",
					}}
				>
					<Form.Item
						label="Name"
						name="name"
						value={modalData.name}
						rules={[
							{
								required: true,
								message: "Name field is required",
							},
						]}
					>
						<Input
							name="name"
							placeholder="Name"
							onChange={handleInputChange}
						/>
					</Form.Item>
					<Form.Item label="Color">
						<Popover
							title="Select Color"
							name="color"
							placement="right"
							trigger="click"
							open={openPop}
							onOpenChange={handleOpenChange}
							content={
								<Radio.Group name="color" optionType="button">
									<Row style={{ marginBottom: "10px" }}>
										<Radio
											value="red"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "red",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="orange"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "orange",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="yellow"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "yellow",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="green"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "green",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="cyan"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "cyan",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="blue"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "blue",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
									</Row>
									<Row>
										<Radio
											value="purple"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "purple",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="salmon"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "salmon",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="violet"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "violet",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="tan"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "tan",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="gray"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "gray",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
										<Radio
											value="pink"
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "pink",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
										></Radio>
									</Row>
								</Radio.Group>
							}
						>
							<Button
								type="primary"
								style={{
									width: "20px",
									heigth: "20px",
									backgroundColor: modalData.color,
									borderRadius: "50%",
									border: "0",
								}}
							>
								{"   "}
							</Button>
						</Popover>
					</Form.Item>
					<Form.Item type="checkbox" label="Icon">
						<>
							<Radio.Group
								name="icon"
								value={modalData.icon}
								onChange={handleInputChange}
								optionType="button"
							>
								<Row>
									<Radio
										value="fas fa-bookmark"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-bookmark"></i>
									</Radio>
									<Radio
										value="fas fa-map-pin"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-map-pin"></i>
									</Radio>
									<Radio
										value="fas fa-gift"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-gift"></i>
									</Radio>

									<Radio
										value="fas fa-graduation-cap"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-graduation-cap"></i>
									</Radio>
									<Radio
										value="fas fa-suitcase-rolling"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-suitcase-rolling"></i>
									</Radio>
									<Radio
										value="fas fa-ruler-vertical"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-ruler-vertical"></i>
									</Radio>
									<Radio
										value="fas fa-file"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-file"></i>
									</Radio>
									<Radio
										value="fas fa-book-open"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-book-open"></i>
									</Radio>
								</Row>
								<Row>
									<Radio
										value="fas fa-credit-card"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-credit-card"></i>
									</Radio>
									<Radio
										value="fas fa-money-bill"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-money-bill"></i>
									</Radio>
									<Radio
										value="fas fa-dumbbell"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-dumbbell"></i>
									</Radio>
									<Radio
										value="fas fa-utensils"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-utensils"></i>
									</Radio>
									<Radio
										value="fas fa-wine-glass"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-wine-glass"></i>
									</Radio>
									<Radio
										value="fas fa-pills"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-pills"></i>
									</Radio>
									<Radio
										value="fas fa-stethoscope"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-stethoscope"></i>
									</Radio>
									<Radio
										value="fas fa-chair"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-chair"></i>
									</Radio>
								</Row>
								<Row>
									<Radio
										value="fas fa-building"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-building"></i>
									</Radio>
									<Radio
										value="fas fa-landmark"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-landmark"></i>
									</Radio>
									<Radio
										value="fas fa-tv"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-tv"></i>
									</Radio>
									<Radio
										value="fas fa-music"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-music"></i>
									</Radio>
									<Radio
										value="fas fa-gamepad"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-gamepad"></i>
									</Radio>
									<Radio
										value="fas fa-headphones"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-headphones"></i>
									</Radio>
									<Radio
										value="fas fa-leaf"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-leaf"></i>
									</Radio>
									<Radio
										value="fas fa-carrot"
										className="iconSelector"
										onChange={handleInputChange}
									>
										<i className="fas fa-carrot"></i>
									</Radio>
								</Row>
							</Radio.Group>
						</>
					</Form.Item>
					<Form.Item label="Order">
						<InputNumber
							name="order"
							min={0}
							max={1000}
							value={modalData.order}
							onChange={(x) => {
								handleInputChange({ target: { name: "order", value: x } });
							}}
						/>
					</Form.Item>
					<Form.Item
						label="Type"
						className="collection-create-form_last-form-item"
					>
						<Radio.Group name="type" value={modalData.type}>
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
