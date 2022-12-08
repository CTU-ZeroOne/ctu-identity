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
import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";
import { Divider, Input, Modal } from "tiny-ui";

const RegisterScan = ({ visible, onCancel, onSuccess }) => {
	const [frontFile, setFrontFile] = useState(null);

	const dataRef = useRef({});

	useEffect(() => {
		if (frontFile) {
			QrScanner.scanImage(frontFile, { returnDetailedScanResult: true })
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [frontFile]);

	return (
		<Modal
			header="Tải ảnh căn cước"
			visible={visible}
			confirmText="Đồng ý"
			cancelText="Hủy"
			style={{ overflow: "auto" }}
			onCancel={onCancel}
		>
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

			<Divider />

			{frontFile && <img src={frontFile} alt="Mặt trước" width="100%" />}
		</Modal>
	);
};

RegisterScan.propTypes = {
	visible: PropTypes.bool,
	onCancel: PropTypes.func,
	onSuccess: PropTypes.func,
};

export default RegisterScan;
