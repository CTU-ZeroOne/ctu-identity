<!--
 Copyright (C) 2022 Kim Minh Thắng

 This file is part of ctu-identity.

 ctu-identity is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 ctu-identity is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with ctu-identity.  If not, see <http://www.gnu.org/licenses/>.
-->

# CTU Identity Client

Đây là tài liệu mô tả chức năng và hướng dẫn cài đặt của hệ thống định danh số CTU Identity (Client)

## Mô tả chức năng

-   Giao tiếp giữa người dùng với server
-   Đăng ký
-   Đăng nhập
-   Xác thực người dùng
    ...

## Hướng dẫn cài đặt

-   Cài đặt Nodejs tại [đây](https://nodejs.org)
-   Nêu bạn đang dùng npm để quản lý gói? Hãy cài yarn
    ```sh
    npm i -g yarn
    ```
-   Cài đặt các gói
    ```sh
    yarn
    ```

## Chạy dự án

Dùng lệnh sau để chạy server dự án phiên bản development

```sh
yarn start
```

## Triển khai dự án

Dùng lệnh sau để biên dịch dự án dạng production

```sh
yarn build
```
