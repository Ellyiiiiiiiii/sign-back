// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);

import express from "express";
import salesArray from "./data/sales.js";

const app = express();

app.set("view engine", "ejs");

// 路由設定, routes
// 1. get(): 只接受 HTTP GET 方法的拜訪
// 2. 只接受 路徑為 / 的 request
app.get("/", (req, res) => {
  // res.send("<h2>Hello World</h2>");
  res.render("home", { name: "Shinder" });
});

// ************* 設定靜態內容資料夾 *************
app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));

// ************* 放在所有路由的後面 *************
// 404 頁面
app.use((req, res) => {
  res.status(404).send("<h1>您走錯路了</h1>");
});

const port = process.env.WEB_PORT || 3002;
app.listen(port, () => {
  console.log(`伺服器啟動了, port: ${port}`);
});
