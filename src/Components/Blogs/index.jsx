import './style.css';

const BlogsComponent = ({ blogImage, title, description, buttonText }) => {
  return (
    <div className="box">
      <img src={blogImage} alt="food" />
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default BlogsComponent;
