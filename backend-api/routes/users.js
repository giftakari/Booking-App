import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ user: "akaris", password: 90000 });
});

router.get("/add", (req, res) => {
  res.json({ message:"confirmed",username: "akaris", password: 12345 });
});

export default router;
