import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/hotels", verifyAdmin, createHotel);

//UPDATE
router.put("/hotels/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/hotels/:id", verifyAdmin, deleteHotel);
//GET

router.get("/hotels/find/:id", getHotel);
//GET ALL

router.get("/hotels", getHotels);
router.get("/hotels/countByCity", countByCity);
router.get("/hotels/countByType", countByType);
router.get("/hotels/room/:id", getHotelRooms);
export default router;
