import express  from 'express'
import {getPosts, createPost} from '../controllers/posts.js'

// export routing
const router = express.Router()

//get & post /posts
router.get('/', getPosts).post('/', createPost)


export default router