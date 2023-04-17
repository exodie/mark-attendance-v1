import { Router } from "express";

import { LessonsController } from "../../controllers/lessons/lessons.controller.js";

export const lessonsRouter = Router();
const methods = new LessonsController();

lessonsRouter.get("/get_all_lessons", methods.getAllLessons);