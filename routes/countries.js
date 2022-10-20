import { Router } from "express";
import * as controllers from "../controllers/countries.js";

const router = Router();

router.get("/", controllers.getCountries);
router.get("/:id", controllers.getCountry);
router.get("/name/:name", controllers.getCountryByName);
router.post("/", controllers.createCountry);
router.put("/:id", controllers.updateCountry);
router.delete("/:id", controllers.deleteCountry);

export default router;
