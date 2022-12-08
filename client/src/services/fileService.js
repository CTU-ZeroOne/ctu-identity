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

const fileService = {
	async downloadFileByKey(key) {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_BACKEND_ENDPOINT}key-download/${key}`
			);

			const jsonString = JSON.stringify(res.data, undefined, 2);
			const blob = new Blob([jsonString], { type: "text/plain" });
			const link = document.createElement("a");
			link.download = "key.json";
			link.href = URL.createObjectURL(blob);
			link.click();
		} catch (error) {}
	},
};

export default fileService;
