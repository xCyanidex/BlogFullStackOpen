const blogRouter=require('express').Router();
const BlogsController=require('../controllers/blog')

blogRouter.get('/', BlogsController.getAllBlogs);
blogRouter.post('/', BlogsController.createBlog);
blogRouter.get('/:id', BlogsController.getBlogById);


module.exports = blogRouter