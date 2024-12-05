import express from "express";
import {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js"; // Assuming controller location

const router = express.Router();

// Route for creating an item (POST)
router.post("/items", createItem);

// Route for getting all items (GET)
router.get("/items", getItems);

// Route for getting an item by ID (GET)
router.get("/items/:id", getItemById);

// Route for updating an item by ID (PUT)
router.put("/items/:id", updateItem);

// Route for deleting an item by ID (DELETE)
router.delete("/items/:id", deleteItem);

export default router;
