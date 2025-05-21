import './style.css';

const TitleSection = ({ title, subTitle }) => {
  return (
    <div className="title_section">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default TitleSection;
