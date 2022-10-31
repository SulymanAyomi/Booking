import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/rooms/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/rooms/availability/:id", updateRoomAvailability);
router.put("/rooms/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/rooms/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/rooms/:id", getRoom);
//GET ALL

router.get("/rooms", getRooms);

export default router;
