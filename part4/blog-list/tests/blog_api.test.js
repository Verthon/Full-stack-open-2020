const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const helper = require('../utils/test_helper')

const Blog = require('../model/blog')
const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({})

  let blogObject = new Blog(helper.initialBlogs[0])
  await blogObject.save()
})

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("there are two blogs", async () => {
  const response = await api.get("/api/blogs");
  expect(200)
  expect(response.body.length).toEqual(helper.initialBlogs.length)
});

test("verify POST success", async () => {
  const newBlog = {
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
  };
  await api.post("/api/blogs").send(newBlog).expect(201).expect('Content-Type', /application\/json/)
  const blogsAfterPOST = await api.get('/api/blogs')
  expect(blogsAfterPOST.body[1].title).toEqual(newBlog.title)
  expect(blogsAfterPOST.body.length).toEqual(helper.initialBlogs.length + 1)
});

test('verify DELETE success', async () => {
  const realId = '5ebfd147a3a0f94f8f89bbeb';
  await api.delete(`/api/blogs/${realId}`).expect(204)
  const response = await api.get("/api/blogs");
  expect(200)
  expect(response.body.length).toEqual(helper.initialBlogs.length)
})

test('verify PUT for likes', async () => {
  const id = '5ebfd147a3a0f94f8f89bbeb';
  const body = {
    title: "GitHub blog",
    author: "JS GURU",
    url: "https://github.blog/",
    likes: 2,
  }
  await api.put(`/api/blogs/${id}`).send(body).expect(200)
  const blogsAfterPUT = await api.get('/api/blogs')
  expect(blogsAfterPUT.body[0].likes).toEqual(body.likes)
})

afterAll(() => {
  mongoose.connection.close();
});
