import express from "express";
import db from "./../utils/connect-mysql.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.locals.pageName = "ab-list";

  const perPage = 20; // 每頁最多有幾筆
  let page = +req.query.page || 1;

  const sql = "SELECT COUNT(*) totalRows FROM address_book";
  const [[{ totalRows }]] = await db.query(sql); // 取得總筆數

  let totalPages = 0; // 總頁數, 預設值設定 0
  let rows = []; // 分頁資料
  if (totalRows > 0) {
    totalPages = Math.ceil(totalRows / perPage);

    const sql2 = `SELECT * FROM address_book LIMIT ${
      (page - 1) * perPage
    }, ${perPage} `;
    [rows] = await db.query(sql2);
  }

  res.json({ totalRows, totalPages, page, perPage, rows });

  // res.render("address-book/list");
});

export default router;
