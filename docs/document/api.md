---
outline: deep
---

# API

## 送出候位資訊

| POST | http://localhost:7260/ |
| ---- | ---------------------- |

### Header Params

| key          | value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | Raw/json    |

### Body

```json
{
  "audlt": 0, // 成人用餐數
  "child": 0 // 兒童用餐數
}
```

### Response

```json
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
}
```

## 查詢候位登記

| GET | http://localhost:7260/ |
| --- | ---------------------- |

### Header Params

| key          | value                    | Description |
| ------------ | ------------------------ | ----------- |
| id           | 507f1f77bcf86cd799439011 | id          |
| Content-Type | application/json         | Raw/json    |

### Response

```json
{
    "registerNumber": 0, // 登記序號
    "registerTime": Date("2016-05-18T16:00:00Z");, // 登記時間
}
```

## 取消候位登記

| PUT | http://localhost:7260/ |
| --- | ---------------------- |

### Header Params

| key          | value                    | Description |
| ------------ | ------------------------ | ----------- |
| id           | 507f1f77bcf86cd799439011 | id          |
| Content-Type | application/json         | Raw/json    |

### Body

```json
{
  "status": 1 // 訂單狀態，1 為取消候位
}
```

## 獲取候位人數

| websocket | ws://localhost:7260/waiting-count |
| --------- | --------------------------------- |

### Description

此 WebSocket 連接用於實時獲取候位人數。連接建立後，服務器會推送最新的候位人數更新。

### Client-Side Code Example

以下是如何在前端使用 WebSocket 獲取候位人數的範例代碼：

```javascript
// 建立 WebSocket 連接
const socket = new WebSocket("ws://localhost:7260/waiting-count");

// 當連接成功建立時觸發此事件
socket.onopen = function (event) {
  console.log("WebSocket is open now.");
};

// 當收到服務器發來的消息時觸發此事件
socket.onmessage = function (event) {
  const data = json.parse(event.data);
  console.log("Current waiting count:", data.waitingCount);
  // 在這裡處理收到的候位人數數據
};

// 當連接關閉時觸發此事件
socket.onclose = function (event) {
  console.log("WebSocket is closed now.");
};

// 當發生錯誤時觸發此事件
socket.onerror = function (error) {
  console.error("WebSocket Error:", error);
};
```

### Server-Side Response Example

服務器推送的數據格式如下：

```json
{
  "waitingCount": 10 // 當前候位人數
}
```
