import express from "express"
import { checkAuth, login,logout,signup, updateProfile} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

router.put("/update-profile",protectRoute,updateProfile);
//if we want to update our profile first middleware is checked and then next only you will be able to update your profile 

router.get("/check",protectRoute,checkAuth);
export default router