const Blog = require("../model/blog");

const initialBlogs = [
  {
    title: "GitHub blog",
    author: "JS GURU",
    url: "https://github.blog/",
    likes: 1,
  },
];

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  blogsInDb,
};
