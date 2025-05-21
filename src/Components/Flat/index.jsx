import './style.css';
import IMAGE_SRC1 from '../../assets/Knot.png';
import Button from '../../mock/SpecialCard/Button';

const FlatComponent = () => {
  return (
    <div className="flat-content">
      <img src={IMAGE_SRC1} alt="img" />
      <div className="content">
        <h2>Come join us for a lunch this weekend and enjoy</h2>
        <p>FLAT 10% OFF</p>
        <Button btn="Read more" />
      </div>
      <img src={IMAGE_SRC1} alt="img" />
    </div>
  );
};

export default FlatComponent;
