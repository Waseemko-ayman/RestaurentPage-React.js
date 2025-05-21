import './style.css';

const Button = ({ btn, ...props }) => {
  return (
    <button className="btn_component" {...props}>
      {btn}
    </button>
  );
};

export default Button;
