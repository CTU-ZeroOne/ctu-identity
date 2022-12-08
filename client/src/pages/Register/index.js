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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Divider, Form, Input, NativeSelect, Typography } from "tiny-ui";

import AuthLayout from "~/components/AuthLayout";
import cityService from "~/services/cityService";

import RegisterScan from "./RegisterScan";

const Register = () => {
	const [ocrVisible, setOrcVisible] = useState(false);
	const [cities, setCities] = useState([]);

	const formik = useFormik({
		initialValues: {
			cccd: "",
			name: "",
			birthday: "",
			sex: 1,
			place_origin: 1,
			place_residence: 1,
			date: "",
		},

		onSubmit: async (values) => {
			try {
				console.log(values);
			} catch (error) {}
		},
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await cityService.getAllCities();
				setCities(
					Object.keys(res.data)
						.sort()
						.map((key) => res.data[key])
				);
			} catch (error) {
			} finally {
			}
		};

		fetchData();
	}, []);

	return (
		<AuthLayout>
			<Typography.Heading level={2} style={{ textAlign: "center" }}>
				Đăng ký
			</Typography.Heading>

			<form onSubmit={formik.handleSubmit}>
				<Divider>Nhập thông tin</Divider>
				<Form.Item label="Số CCCD" required>
					<Input
						placeholder="Số CCCD"
						name="cccd"
						required
						maxLength={12}
						minLength={12}
						onInput={formik.handleChange}
					/>
				</Form.Item>

				<Form.Item label="Họ tên" required>
					<Input
						placeholder="Họ tên"
						name="name"
						required
						onInput={formik.handleChange}
					/>
				</Form.Item>

				<Form.Item label="Ngày sinh" required>
					<Input
						placeholder="Ngày sinh"
						name="birthday"
						type="date"
						required
						onInput={formik.handleChange}
					/>
				</Form.Item>

				<Form.Item label="Giới tính" required>
					<NativeSelect
						name="sex"
						placeholder="Giới tính"
						onInput={formik.handleChange}
						required
					>
						<NativeSelect.Option value={1}>Nam</NativeSelect.Option>
						<NativeSelect.Option value={2}>Nữ</NativeSelect.Option>
					</NativeSelect>
				</Form.Item>

				<Form.Item label="Quê quán" required>
					<NativeSelect
						disabled={!cities.length}
						name="place_origin"
						placeholder="Quê quán"
						required
						onInput={formik.handleChange}
					>
						{cities.map((city) => (
							<NativeSelect.Option key={city.code} value={city.code}>
								{city.code} - {city.name_with_type}
							</NativeSelect.Option>
						))}
					</NativeSelect>
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
			</form>

			<RegisterScan visible={ocrVisible} onCancel={() => setOrcVisible(false)} />

			<Typography.Paragraph style={{ marginTop: 10 }}>
				Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
			</Typography.Paragraph>
		</AuthLayout>
	);
};

export default Register;
