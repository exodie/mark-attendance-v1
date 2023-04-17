import { Router } from "express";

import { StudentsController } from "../../controllers/students/students.controller.js";

export const studentsRouter = Router();
const methods = new StudentsController();

studentsRouter.post("/auth", methods.studentsAuth);
studentsRouter.get("/get_all_students", methods.getAllStudetsList);
studentsRouter.post("/set_selected_students", methods.setSelectedStudents);
//studentsRouter.post("/send_selected_students", methods.sendSelectedStudents);
