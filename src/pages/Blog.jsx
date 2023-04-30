import "./blog.scss";
import Navbar from "@/components/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="container blog">
        <div className="loader">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <h3>Em desenvolvimento...</h3>
      </div>
    </>
  );
};

export default Blog;
