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

import { Link } from "react-router-dom";
import { Button, Divider, Input, Typography } from "tiny-ui";

import AuthLayout from "~/components/AuthLayout";

const Login = () => {
	return (
		<AuthLayout>
			<Typography.Heading level={2} style={{ textAlign: "center" }}>
				Đăng nhập
			</Typography.Heading>
			<form>
				<Input type="file" placeholder="Tải khóa lên để đăng nhập" />

				<Divider />

				<Button block btnType="primary">
					Đăng nhập
				</Button>

				<Typography.Paragraph style={{ marginTop: 10 }}>
					Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
				</Typography.Paragraph>
			</form>
		</AuthLayout>
	);
};

export default Login;
