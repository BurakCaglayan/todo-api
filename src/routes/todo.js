import { Router } from "express";
import {TodoController} from "../controllers/todo"

const router = Router();

router.get("/list", TodoController.list);
router.get("/:id", TodoController.get);
router.post("/", TodoController.create);
router.put("/:id", TodoController.update);
router.delete("/:id", TodoController.delete);

export default router;
