const blogRoutes = require("express").Router();
const Blog = require("../model/blog");

blogRoutes.get("/", async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    if (blogs) {
      res.json(blogs);
    }
  } catch (error) {
    next(error);
  }
});

blogRoutes.post("/", async (req, res, next) => {
  const blog = new Blog(req.body);
  try {
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
});

blogRoutes.delete("/:id", async (req, res, next) => {
  const likes = req.params.id;
  console.log("id for delete", likes);
  try {
    await Blog.findByIdAndRemove(likes);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

blogRoutes.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const blog = new Blog(req.body);
  try {
    await Blog.findByIdAndUpdate(id, blog, { new: true })
    res.status(200).json(blog)
  } catch (error) {
    next(error);
  }
});

module.exports = blogRoutes;
