import { Router } from "express";
import controllers from "../controllers/staff.js";
import { AdminMiddleware } from "../middleware/validation.js";

let staffrouter=Router()

staffrouter
    .post("/admin",AdminMiddleware,controllers.createAdmin)
    .get("/get/admins",controllers.getAllAdmins)
    .delete("/delete/staff/:userId",controllers.deleteAdmin)

export default staffrouter