import { Router } from "express";
import controllers from "../controllers/mentors.js"
import { MentorMiddleware } from "../middleware/validation.js";

let mentorsRouter=Router()

mentorsRouter
    .get("/get/mentors",controllers.getAllMentors)
    .post("/add/mentor",MentorMiddleware,controllers.addMentor)
    .delete("/delete/mentor/:id",controllers.deleteMentor)
    .get("/get/mentor/:mentorId",controllers.getTHIS_Mentor)
    .put("/edit/mentor/:mentorId",controllers.editMentor)


export default mentorsRouter