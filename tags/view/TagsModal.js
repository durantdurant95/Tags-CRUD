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
				open={open}
				onOk={handleModalOk}
				onCancel={handleCancel}
				okText="Save"
			>
				<Form
					form={form}
					layout="horizontal"
					name="form_in_modal"
					initialValues={{
						modalData,
					}}
				>
					<Form.Item label="Name">
						<Input
							name="name"
							placeholder="Name"
							value={modalData.name}
							onChange={handleInputChange}
						/>
					</Form.Item>
					<Form.Item label="Color">
						<Popover
							name="color"
							placement="right"
							content={
								<Radio.Group
									optionType="button"
									name="color"
									defaultValue={"red"}
								>
									<Row style={{ marginBottom: "10px" }}>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "red",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="red"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "orange",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="orange"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "yellow",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="yellow"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "green",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="green"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "cyan",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="cyan"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "#1890ff",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="blue"
										></Radio>
									</Row>
									<Row>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "purple",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="purple"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "salmon",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="salmon"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "violet",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="violet"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "tan",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="tan"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "gray",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="gray"
										></Radio>
										<Radio
											onClick={hidePop}
											onChange={handleInputChange}
											style={{
												backgroundColor: "pink",
												borderRadius: "50%",
												marginRight: "10px",
												border: "0",
											}}
											value="pink"
										></Radio>
									</Row>
								</Radio.Group>
							}
							title="Select Color"
							trigger="click"
							open={openPop}
							onOpenChange={handleOpenChange}
						>
							<Button
								style={{
									width: "20px",
									heigth: "20px",
									backgroundColor: modalData.color,
									borderRadius: "50%",
									border: "0",
								}}
								type="primary"
							>
								{"   "}
							</Button>
						</Popover>
					</Form.Item>
					<Form.Item type="checkbox" label="Icon">
						<>
							<Radio.Group
								name="icon"
								onChange={handleInputChange}
								optionType="button"
							>
								<Row>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-bookmark"
									>
										<i className="fas fa-bookmark"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-map-pin"
									>
										<i className="fas fa-map-pin"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-gift"
									>
										<i className="fas fa-gift"></i>
									</Radio>

									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-graduation-cap"
									>
										<i className="fas fa-graduation-cap"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-suitcase-rolling"
									>
										<i className="fas fa-suitcase-rolling"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-ruler-vertical"
									>
										<i className="fas fa-ruler-vertical"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-file"
									>
										<i className="fas fa-file"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-book-open"
									>
										<i className="fas fa-book-open"></i>
									</Radio>
								</Row>
								<Row>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-credit-card"
									>
										<i className="fas fa-credit-card"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-money-bill"
									>
										<i className="fas fa-money-bill"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-dumbbell"
									>
										<i className="fas fa-dumbbell"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-utensils"
									>
										<i className="fas fa-utensils"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-wine-glass"
									>
										<i className="fas fa-wine-glass"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-pills"
									>
										<i className="fas fa-pills"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-stethoscope"
									>
										<i className="fas fa-stethoscope"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-chair"
									>
										<i className="fas fa-chair"></i>
									</Radio>
								</Row>
								<Row>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-building"
									>
										<i className="fas fa-building"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-landmark"
									>
										<i className="fas fa-landmark"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-tv"
									>
										<i className="fas fa-tv"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-music"
									>
										<i className="fas fa-music"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-gamepad"
									>
										<i className="fas fa-gamepad"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-headphones"
									>
										<i className="fas fa-headphones"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-leaf"
									>
										<i className="fas fa-leaf"></i>
									</Radio>
									<Radio
										className="iconSelector"
										onChange={handleInputChange}
										value="fas fa-carrot"
									>
										<i className="fas fa-carrot"></i>
									</Radio>
								</Row>
							</Radio.Group>
						</>
					</Form.Item>
					<Form.Item label="Order">
						<InputNumber
							min={1}
							max={1000}
							defaultValue={1}
							value={modalData.order}
							onChange={(x) => {
								handleInputChange({ target: { name: "order", value: x } });
							}}
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
