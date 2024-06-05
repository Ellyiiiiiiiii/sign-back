// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);

import express from "express";
import sales from "./data/sales.js";

const app = express();

app.set("view engine", "ejs");

// Top-level middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 路由設定, routes
// 1. get(): 只接受 HTTP GET 方法的拜訪
// 2. 只接受 路徑為 / 的 request
app.get("/", (req, res) => {
  // res.send("<h2>Hello World</h2>");
  res.render("home", { name: "Shinder" });
});

app.get("/json-sales", (req, res) => {
  // 輸出 application/json 的格式
  // res.json(salesArray);

  res.render("json-sales", { sales });
});

// 測試 query string 參數
app.get("/try-qs", (req, res) => {
  res.json(req.query);
});

app.get("/try-post-form", (req, res) => {
  res.render("try-post-form");
});

// middleware: 中介軟體, 中介處理函式
// const urlencodedParser = express.urlencoded({extended: true});
app.post("/try-post-form", (req, res) => {
  // 經過 parser 後, 才會有 req.body
  res.json(req.body);
});

app.post("/try-post", (req, res) => {
  res.json(req.body);
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
