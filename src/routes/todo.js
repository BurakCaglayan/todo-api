import { Router } from "express";

const router = Router();

router.get("/list", (req, res) => {
  return res.end("List not implemented yet");
});
router.get("/:id", (req, res) => {
  return res.end("Get not implemented yet");
});
router.post("/", (req, res) => {
  return res.end("Create not implemented yet");
});
router.put("/:id", (req, res) => {
  return res.end("Update not implemented yet");
});
router.delete("/:id", (req, res) => {
  return res.end("Delete not implemented yet");
});

export default router;
