import express from "express"
import controller from "../controllers/blogController.js"
const router = express.Router() 

//index 
router.get("/", controller.index)


//show 
router.get("/:id", controller.show)


//store 
router.post("/", controller.store)


//update
router.put("/:id", controller.update)


//modify
router.patch("/:id", controller.modify)


//destroy
router.delete("/:id", controller.destroy)


export default router