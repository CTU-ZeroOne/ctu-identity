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

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Input, Modal, Typography } from "tiny-ui";

const RegisterOCR = ({ visible, onCancel, onSuccess }) => {
	const [frontFile, setFrontFile] = useState(null);
	const [backFile, setBackFile] = useState(null);

	useEffect(() => {
		setBackFile(null);
		setFrontFile(null);
	}, [visible]);

	return (
		<Modal
			header="Tải ảnh căn cước"
			visible={visible}
			confirmText="Đồng ý"
			cancelText="Hủy"
			style={{ overflow: "auto" }}
			onCancel={onCancel}
		>
			<Typography.Heading level={3}>Mặt trước</Typography.Heading>

			<Input
				type="file"
				accept="image/*"
				onChange={(event) => {
					if (event.target.files[0]) {
						URL.revokeObjectURL(frontFile);
						setFrontFile(URL.createObjectURL(event.target.files[0]));
					}
				}}
			/>

			{frontFile && <img src={frontFile} alt="Mặt trước" width="100%" />}

			<Typography.Heading level={3}>Mặt sau</Typography.Heading>

			<Input
				type="file"
				accept="image/*"
				onChange={(event) => {
					if (event.target.files[0]) {
						URL.revokeObjectURL(backFile);

						setBackFile(URL.createObjectURL(event.target.files[0]));
					}
				}}
			/>

			{backFile && <img src={backFile} alt="Mặt trước" width="100%" />}
		</Modal>
	);
};

RegisterOCR.propTypes = {
	visible: PropTypes.bool,
	onCancel: PropTypes.func,
};

export default RegisterOCR;
