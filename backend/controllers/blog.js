const Blog=require('../models/blog');

const getAllBlogs=async(req,res,next)=>{
    try{
        const Blogs=await Blog.find({});
        res.json(Blogs); 
    }
    catch(error){
        next(error);
    }
}

const getBlogById=async(req,res,next)=>{
    try{
const findBlog=await Blog.findById(req.params.id)
        if (findBlog){
            res.json(findBlog)
}else{
    res.status(404).end();
}
    }catch(error){
        next(error);
    }
}

const createBlog=async(req,res,next)=> {
 try{
const {title,author,url}=req.body;
if(!title || !author || !url){
    return res.status(400).json({ error: 'title, author, and url are required' });
}
const newBlog= new Blog({
    title,
    author,
    url
});
     const savedBlog = await newBlog.save();
     res.status(201).json(savedBlog);
 }
 catch(error){
next(error)
 }
}

module.exports = { getAllBlogs, getBlogById, createBlog }