import './style.css';
import Header from '../../../Components/landing/Header';
import Content from '../../../Components/landing/content';
import Container from '../../../Components/Container/Container1';

const Landing = () => {
  return (
    <div className="landing">
      <Container>
        <Header />
        <Content />
      </Container>
    </div>
  );
};

export default Landing;
