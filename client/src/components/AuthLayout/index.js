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

import styles from "./AuthLayout.module.scss";

const AuthLayout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>{children}</div>
		</div>
	);
};

AuthLayout.propTypes = {
	children: PropTypes.node,
};

export default AuthLayout;
