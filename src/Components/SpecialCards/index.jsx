import './style.css';

const SpecialCards = ({ title, descriptionCard, imageCard }) => {
  return (
    <div className="card">
      <img src={imageCard} alt="special card" />
      <h3>{title}</h3>
      <p>{descriptionCard}</p>
    </div>
  );
};

export default SpecialCards;
