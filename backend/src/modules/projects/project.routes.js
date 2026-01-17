import express from "express";
import { protect } from "../../middlewares/auth.middleware.js";
import { createProject } from "./project.controller.js";

const router = express.Router();

router.post("/", protect, createProject);

export default router;
