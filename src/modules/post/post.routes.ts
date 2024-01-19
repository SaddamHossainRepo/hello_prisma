import express from 'express';
import { postController } from './post.controller';


const router = express.Router();

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getSinglePost);
router.post("/create-post", postController.createPostController);

export const postRoutes = router;