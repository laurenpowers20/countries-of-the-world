import { Router } from "express";
import * as controllers from "./co";// yet to create

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacter);
router.post("/", controllers.createCharacter);
router.put("/:id", controllers.updateCharacter);
router.delete("/:id", controllers.deleteCharacter);

export default router;