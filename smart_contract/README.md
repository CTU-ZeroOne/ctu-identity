<!--
 Copyright (C) 2022 Le Anh Khoi
 
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

### CTU Identity Smart Contract

Đây là tài liệu mô tả chức năng và hướng dẫn cài đặt của hệ thống định danh số CTU Identity (phần smart contract).

## Mô tả chức năng
- Cập nhật cây Merkle
- Verify các thông tin được gửi lên từ server
  - Verify một trong các trường thông tin là đúng
  - Verify tất cả các trường thông tin đều đúng

## Hướng dẫn cài đặt
- Cài đặt NodeJS (khuyến nghị phiên bản 16.0.0 trở lên và sử dụng [nvm](https://github.com/nvm-sh/nvm) để dễ dàng quản lý phiên bản)
- Cài đặt `yarn`
    ```bash
    npm install -g yarn
    ```
- Cài đặt `truffle`
    ```bash
    npm install -g truffle
    ```
- Cài đặt Ganache theo link: https://trufflesuite.com/ganache/
- Chạy file đã tải về và chọn Quick start, ta sẽ build được một blockchain chạy trên máy local để test smart contract

- Clone repo này về máy, truy cập vào thư mục `smart_contract`
    ```bash
    git clone https://github.com/CTU-ZeroOne/ctu-identity
    cd ctu-identity/smart_contract
    ```
- Cài đặt các package cần thiết
    ```bash
    yarn install
    ```
- Vào thư mục truffle-config.js và đặt lại các cấu hình sau:
```
networks: {
    ...
    development: {
        host: '127.0.0.1', // xem tại mục RPC SERVER trong Ganache
        port: 7545, // xem tại mục RPC SERVER trong Ganache
        network_id: '5777' // xem tại mục NETWORK ID trong Ganache

    }
    ...
}
```
- Vào giao diện chính của Ganache, chọn biểu tượng cài đặt, chọn Add Project, chọn đường dẫn đến file truffle-config.js vừa cấu hình
- Chạy lệnh bên dưới để deploy smart contract lên local blockchain
    ```bash
    truffle migrate
    ```
- Sau khi deploy, quay lại Ganache và chọn mục contracts để lấy địa chỉ của smart contract vừa deploy

