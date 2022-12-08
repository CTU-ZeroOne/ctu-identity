<!--
 Copyright (C) 2022 Le Van Dat

 This file is part of CTU-Identity.

 CTU-Identity is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 CTU-Identity is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with CTU-Identity.  If not, see <http://www.gnu.org/licenses/>.
-->

### CTU Identity Server

Đây là tài liệu mô tả chức năng và hướng dẫn cài đặt của hệ thống định danh số CTU Identity (phần server).

## Mô tả chức năng

-   Xử lý yêu cầu đăng ký tài khoản từ client
-   Xử lý dữ liệu đã đăng ký với Merkle tree và lưu trữ trên Blockchain
-   Thiết lập Smart Contract
-   Xử lý yêu cầu đăng nhập bằng file key của client
-   Giao tiếp với client qua API
-   ...

## Hướng dẫn cài đặt

-   Cài đặt NodeJS (khuyến nghị phiên bản 16.0.0 trở lên và sử dụng [nvm](https://github.com/nvm-sh/nvm) để dễ dàng quản lý phiên bản)
-   Cài đặt `yarn`
    ```bash
    npm install -g yarn
    ```
-   Clone repo này về máy, truy cập vào thư mục `server`
    ```bash
    git clone https://github.com/CTU-ZeroOne/ctu-identity
    cd ctu-identity/server
    ```
-   Cài đặt các package cần thiết
    ```bash
    yarn install
    ```
-   Copy file `.env.example` thành `.env` và chỉnh sửa một số thông tin nếu cần thiết
<details>
    <summary>Config file .env</summary>
    <li>SERVER_PORT: PORT của server (mặc định 3000)</li>
</details>

## Chạy server

Chạy bình thường với Node

```bash
yarn start
```
