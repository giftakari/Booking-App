import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ username: "akaris", password: 12345 });
});

router.get("/register", (req, res) => {
  res.json({ message:"confirmed",username: "akaris", password: 12345 });
});

export default router;
