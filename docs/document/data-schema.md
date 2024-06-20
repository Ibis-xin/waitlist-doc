---
outline: deep
---

# 資料庫 schema

本頁面用以說明系統資料庫所有表欄位

## 候位用餐

### 欄位

```json
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "registerNumber": 0, // 登記序號
    "registerTime": Date("2016-05-18T16:00:00Z");, // 登記時間
    "audlt": 0, // 成人用餐數
    "child": 0, // 兒童用餐數
    "highchair": 0, // 兒童椅數
    "checkinTime": Date("2016-05-18T16:00:00Z"), // 入座時間
    "orderTime":  Date("2016-05-18T16:00:00Z"), // 點餐時間
    "orderNumber": 0, // 點餐序號
    "orderDetail": [ObjectId("507f1f77bcf86cd799439011")], // 點餐明細
    "amount": 0, // 金額
    "checkoutTime": Date("2016-05-18T16:00:00Z"), // 結帳時間
}
```

### 欄位說明

| name           | type       | uniqued                       | readonly | description                                                          |
| -------------- | ---------- | ----------------------------- | -------- | -------------------------------------------------------------------- |
| \_id           | ObjectId   | ✅                            | ✅       | 由 mongoDB 自動生成                                                  |
| registerNumber | int        | registerNumber & registerTime | ✅       | 登記序號                                                             |
| registerTime   | Date       |                               | ✅       | 登記時間                                                             |
| audlt          | int        |                               |          | 成人用餐數                                                           |
| child          | int        |                               |          | 兒童用餐數                                                           |
| highchair      | int        |                               |          | 兒童椅數                                                             |
| checkinTime    | Date       |                               | ✅       | 入座時間，如抽取號碼牌未入座則為 Default datetime                    |
| orderNumber    | int        | orderNumber & orderTime       | ✅       | 點餐序號，如抽取號碼牌未入座或入座未點餐則為 -1                      |
| orderTime      | Date       |                               | ✅       | 點餐時間，如抽取號碼牌未入座或入座未點餐則為 Default datetime        |
| orderDetail    | ObjectId[] |                               |          | 點餐明細，需對照菜單資料庫，如抽取號碼牌未入座或入座未點餐則為空陣列 |
| amount         | number     |                               | ✅       | 金額，如抽取號碼牌未入座或入座未點餐則為 0                           |
| checkoutTime   | Date       |                               | ✅       | 結帳時間，如抽取號碼牌未入座則為 Default datetime                    |

## 菜單

### 欄位

### 欄位說明
