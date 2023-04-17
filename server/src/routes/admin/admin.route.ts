import { Router } from "express";

import { AdminController } from "../../controllers/admin/admin.controller.js";

export const adminRouter = Router();
const methods = new AdminController();

adminRouter.post("/auth", methods.adminAuth);