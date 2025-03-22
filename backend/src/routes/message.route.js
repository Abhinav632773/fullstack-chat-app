import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js';
import { getMessages, getUserForsidebar, sendMessage } from '../controllers/message.controller.js';


const router = express.Router();


router.get("/users",protectRoute,getUserForsidebar)
router.get("/:id",protectRoute,getMessages)

router.post("/send/:id",protectRoute,sendMessage)

export default router;