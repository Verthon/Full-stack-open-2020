const dummy = () => {
  return 1;
};

const totalLikes = (blogList) => {
  if(blogList.length === 1) {
    return blogList[0].likes
  }
  return blogList.map(blog => blog.likes)
};

const favoriteBlog = (blogList) => {
  const listOfLikes = blogList.map(blog => blog.likes)
  const biggestLikeNumber = listOfLikes.reduce((a, b) => Math.max(a, b))
  const [favBlog] = blogList.filter(blog => blog.likes === biggestLikeNumber)
  const result = {
    title: favBlog.title,
    author: favBlog.author,
    likes: favBlog.likes
  }
  return result
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};
