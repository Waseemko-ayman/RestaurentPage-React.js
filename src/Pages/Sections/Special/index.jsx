import './style.css';
import TitleSection from '../../../mock/SpecialCard/Title';
import SPECIAL_DATA from '../../../mock/speical';
import SpecialCards from '../../../Components/SpecialCards';
import Container from '../../../Components/Container/Container1';

const Speical = () => {
  return (
    <div className="speical-section" id="special">
      <Container>
        <TitleSection title="Speical" subTitle="What makes us special" />
        <div className="special-card">
          {SPECIAL_DATA.map(({ id, title, description, image }) => (
            <SpecialCards
              key={id}
              title={title}
              descriptionCard={description}
              imageCard={image}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Speical;
