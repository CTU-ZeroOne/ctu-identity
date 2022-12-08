// Copyright (C) 2022 Kim Minh Thắng
//
// This file is part of ctu-identity.
//
// ctu-identity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// ctu-identity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with ctu-identity.  If not, see <http://www.gnu.org/licenses/>.

import { useFormik } from "formik";
import { useState } from "react";
import { Badge, Button, Divider, Form, Input, NativeSelect, Typography } from "tiny-ui";

import AuthLayout from "~/components/AuthLayout";
import RegisterScan from "./RegisterScan";

const Register = () => {
	const [ocrVisible, setOrcVisible] = useState(false);

	const formik = useFormik({
		initialValues: {
			identity: "",
			fullName: "",
			dateOfBirth: "",
			sex: "",
			country: "",
		},
	});

	return (
		<AuthLayout>
			<Typography.Heading level={2} style={{ textAlign: "center" }}>
				Đăng ký
			</Typography.Heading>

			<Form>
				<Divider>Nhập thông tin</Divider>
				<Form.Item label="Số CCCD">
					<Input
						placeholder="Số CCCD"
						name="identity"
						value={formik.values.identity}
						onChange={formik.handleChange}
					/>
				</Form.Item>

				<Form.Item label="Họ tên">
					<Input
						placeholder="Họ tên"
						name="fullName"
						value={formik.values.fullName}
						onChange={formik.handleChange}
					/>
				</Form.Item>

				<Form.Item label="Ngày sinh">
					<Input
						placeholder="Ngày sinh"
						name="dateOfBirth"
						type="date"
						value={formik.values.dateOfBirth}
						onChange={formik.handleChange}
					/>
				</Form.Item>

				<Form.Item label="Giới tính">
					<NativeSelect onChange={formik.handleChange} placeholder="Giới tính">
						<NativeSelect.Option value={0}>Nam</NativeSelect.Option>
						<NativeSelect.Option value={1}>Nữ</NativeSelect.Option>
					</NativeSelect>
				</Form.Item>

				<Form.Item label="Quê quán">
					<Input
						placeholder="Quê quán"
						name="country"
						value={formik.values.country}
						onChange={formik.handleChange}
					/>
				</Form.Item>

				<Divider>Hoặc</Divider>

				<Badge style={{ width: "100%" }} count="Đang phát triển">
					<Button disabled block btnType="outline" onClick={() => setOrcVisible(true)}>
						Tải ảnh căn cước công dân
					</Button>
				</Badge>

				<Divider />

				<Button btnType="primary" block type="submit">
					Đăng ký
				</Button>
			</Form>

			<RegisterScan
				visible={ocrVisible}
				formik={formik}
				onCancel={() => setOrcVisible(false)}
			/>
		</AuthLayout>
	);
};

export default Register;
