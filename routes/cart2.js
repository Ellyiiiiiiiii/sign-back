import express from "express";
import db from "./../utils/connect-mysql.js";

const router = express.Router();

/*
購物車 (會員要先登入)
  C: 加到購物車
  R: 查看購物車內容
  U: 變更某一項的數量
  D: 刪除某一項, 清空購物車
  */

// 登入後再可以使用
router.use((req, res, next) => {
  if (!req.session.admin) {
    return res.status(403).json({ success: false, info: "需要登入會員" });
  }
  next();
});

router.get("/", async (req, res) => {
  res.json({ method: "GET" });
});
router.post("/", async (req, res) => {
  res.json({ method: "POST" });
});

// **************** 加入商品
router.post("/add/:pid/:qty?", async (req, res) => {
  const pid = +req.params.pid || 0; // 編號
  const qty = +req.params.qty || 1;
  if (!pid) {
    return res.json({ success: false, info: "沒有商品編號" });
  }
  // 查看商品資料
  const sql = "SELECT sid FROM products WHERE sid=?";
  const [rows] = await db.query(sql, [pid]);
  if (!rows.length) {
    return res.json({ success: false, info: "沒有這項商品" });
  }
  // 寫入 cart2 表
  const sql2 = `INSERT INTO cart2 (member_id, product_id, quantity) 
    VALUES (${req.session.admin.id}, ${pid}, ${qty})`;

  const [result] = await db.query(sql2);
  res.json({
    success: !!result.affectedRows,
  });
});

export default router;
