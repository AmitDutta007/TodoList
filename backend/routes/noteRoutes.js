const express = require('express');
const { getNotes, CreateNote,getNoteById,UpdateNote ,DeleteNote} = require('../controllers/noteControllers');
const { protect } = require("../middlewares/authMiddleware")

const router = express.Router();

// const protect = require('../middlewares/errorMiddleware')

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, CreateNote);
router.route("/:id").get(getNoteById).put(protect, UpdateNote).delete(protect, DeleteNote)
  


module.exports = router;
//   
//   getNotes,
//   DeleteNote,
//   UpdateNote,