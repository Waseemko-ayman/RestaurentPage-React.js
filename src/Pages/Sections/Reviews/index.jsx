import './style.css';
import TitleSection from '../../../mock/SpecialCard/Title';
import ReviewsCard from '../../../Components/Reviews';
import REVIEWS_DATA from '../../../mock/reviews';

const Reviews = () => {
  return (
    <div className="reviews">
      <TitleSection title="Reviews" subTitle="words from our food lovers" />
      <div className="review-boxs">
        {REVIEWS_DATA.map(({ id, person, namePerson, star, description }) => (
          <ReviewsCard
            key={id}
            perImage={person}
            name={namePerson}
            starImage={star}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
