import express from "express";
const router = express.Router()
// 資料庫使用直接使用 mysql+sql 來查詢
import db from "../utils/connect-mysql.js";
// 密碼編碼和檢查比對用
import { generateHash, compareHash } from "../db-helpers/password-hash.js";

// import { Op } from "sequelize";
// import Sequelize from "sequelize";

// 使用一般mysql+SQL的語法
router.get("/add", async (req, res) => {
  res.locals.pageName = "register-add";
  // 呈現新增資料的表單
  res.render("register/add");
});
router.post('/add', async function (req, res) {
  // 要新增的會員資料
  const newUser = req.body

  // 檢查從前端來的資料哪些為必要(name, username...)
  if (
    !newUser.name ||
    !newUser.email ||
    !newUser.password
  ) {
    return res.json({ status: 'error', message: '缺少必要資料' })
  }

  // 先檢查username或是email不能有相同的
  const [rows] = await db.query(
    `SELECT * FROM users WHERE name = ? OR email = ?`,
    [newUser.name, newUser.email]
  )

  console.log(rows)

  if (rows.length > 0) {
    return res.json({
      status: 'error',
      message: '建立會員失敗，有重覆的帳號或email',
    })
  }

  // 以下是準備新增會員
  // 1. 進行密碼編碼
  const passwordHash = await generateHash(newUser.password)
  // 2. 新增到資料表
  // INSERT INTO `users`(`id`, `name`, `email`, `password`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')
  const [rows2] = await db.query(
    `INSERT INTO users(name, email, password) VALUES(?, ?, ?)`,
    [newUser.name, newUser.email, passwordHash]
  )
  console.log(rows2)

  if (!rows2.insertId) {
    return res.json({
      status: 'error',
      message: '建立會員失敗，資料庫錯誤',
    })
  }
})

export default router