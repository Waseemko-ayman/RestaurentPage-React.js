import './style.css';
import TitleSection from '../../../mock/SpecialCard/Title';
import BLOGS_DATA from '../../../mock/blogs';
import BlogsComponent from '../../../Components/Blogs';
import Container from '../../../Components/Container/Container1';

const Blogs = () => {
  return (
    <div className="blogs" id="blogs">
      <Container>
        <TitleSection title="Blogs" subTitle="words from our food lovers" />
        <div className="blog-boxs">
          {BLOGS_DATA.map(({ id, image, title, description, buttonText }) => (
            <BlogsComponent
              key={id}
              blogImage={image}
              title={title}
              description={description}
              buttonText={buttonText}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
