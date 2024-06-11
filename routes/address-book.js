import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("address-book/list");
});

export default router;
