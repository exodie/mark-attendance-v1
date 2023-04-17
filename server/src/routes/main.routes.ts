// lib
import { Router } from "express";

// students router
import { studentsRouter } from "./students/students.route.js";
import { lessonsRouter } from "./lessons/lessons.route.js";
import { adminRouter } from "./admin/admin.route.js";

export const mainRouter = Router();

mainRouter.use("/students", studentsRouter);
mainRouter.use("/admin", adminRouter);
mainRouter.use("/lessons", lessonsRouter);