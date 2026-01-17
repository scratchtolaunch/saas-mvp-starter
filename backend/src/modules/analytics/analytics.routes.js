import express from "express";
import { protect } from "../../middlewares/auth.middleware.js";
import Project from "../projects/project.model.js";
import User from "../users/user.model.js";

const router = express.Router();

/**
 * GET /api/analytics/overview
 * Basic SaaS dashboard metrics
 */
router.get("/overview", protect, async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log("Fetching analytics overview for user:", userId);

    const totalProjects = await Project.countDocuments({
      owner: userId,
    });

    const totalUsers = await User.countDocuments();

    res.json({
      stats: {
        totalProjects,
        totalUsers,
      },
    });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/analytics/health
 * System health check (for SaaS monitoring)
 */
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

export default router;
