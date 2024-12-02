import React from "react";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  imageURL: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Design",
    title: "TRULY IT WAS A GREAT JOURNEY AND IN IT I MET WITH MANY",
    date: "14 November, 2019",
    imageURL: "SOME LINK",
  },
  {
    id: 2,
    category: "Tech",
    title: "WHAT LOOKED LIKE A SMALL PATCH OF PURPLE GRASS",
    date: "14 November, 2019",
    imageURL: "SOME LINK",
  },
  {
    id: 3,
    category: "Life",
    title: "THE ROOTS WERE REVOLVING SMALL PLANT",
    date: "14 November, 2019",
    imageURL: "SOME LINK",
  },
];

const BlogPosts: React.FC = () => {
  return (
    <>
      <section className="blog-posts">
        <h2 className="blog-posts-heading">OUR LATEST BLOG POSTS</h2>
        <div className="blog-posts-container">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-posts-cards">
              <img src="post.imgURL" alt="post.title" />
              <div className="blog-posts-content">
                <p>{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
