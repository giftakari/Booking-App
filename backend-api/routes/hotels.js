import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ username: "akaris", password: 12345 });
});

router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  /*  newHotel
    .save()
    .then((response) => res.sendStatus(200).json(response))
    .catch((error) => res.sendStatus(500).json(error)); */

  try {
    const savedHotel = await newHotel.save();

    res.json(savedHotel);
  } catch (error) {
    res.json(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      res.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.json(updatedHotel);
  } catch (error) {
    res.json(error);
  }
});

router.get("/room", (req, res) => {
  res.json({ message: "confirmed", username: "akaris", password: 12345 });
});

export default router;
