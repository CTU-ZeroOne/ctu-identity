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

import axios from "axios";
import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Divider, Typography } from "tiny-ui";

import AuthLayout from "~/components/AuthLayout";

import styles from "./Login.module.scss";

const Login = () => {
	const fileId = useId();

	const [file, setFile] = useState(null);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

	const handleLogin = async () => {
		try {
			const fileUrl = URL.createObjectURL(file);

			const res = await axios.get(fileUrl);

			const fileData = res.data;

			console.log(fileData);

			setSuccess(true);
		} catch (error) {
			setFailed(true);
		}
	};

	return (
		<AuthLayout>
			<Typography.Heading level={2} style={{ textAlign: "center" }}>
				Đăng nhập
			</Typography.Heading>

			{success ? (
				<Typography.Paragraph>Bạn đã đăng nhập thành công!</Typography.Paragraph>
			) : (
				<div>
					<label className={styles.fileWrapper} htmlFor={fileId}>
						Tải khóa lên để đăng nhập
					</label>

					<input
						type="file"
						id={fileId}
						onChange={(event) => setFile(event.target.files[0])}
						style={{ display: "none" }}
					/>

					{file && <Alert>Bạn đã tải lên 1 file</Alert>}

					<Divider />

					<Button block btnType="primary" disabled={!file} onClick={handleLogin}>
						Đăng nhập
					</Button>

					<Typography.Paragraph style={{ marginTop: 10 }}>
						Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
					</Typography.Paragraph>
				</div>
			)}

			{failed && <Alert type="error"></Alert>}
		</AuthLayout>
	);
};

export default Login;
