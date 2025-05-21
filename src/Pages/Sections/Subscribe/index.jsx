import './style.css';
import EMAIL_ICON from '../../../assets/mail-2.svg';
import Button from '../../../mock/SpecialCard/Button';
import Container from '../../../Components/Container/Container1';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <Container flex>
        <div className="text">
          <img src={EMAIL_ICON} alt="emai-icon" />
          <h2>Subscribe to our Newsletter</h2>
        </div>
        <form>
          <input type="email" placeholder="Your Email Id" required />
          <Button btn="Subscribe" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default Subscribe;
