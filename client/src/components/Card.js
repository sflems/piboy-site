import "./Card.css";

const Card = ({ title, text, icon, buttonText }, props) => {
  console.log(icon);
  const Icon = icon;
  return (
    <div
      text="info"
      className={
        "card col m-3 my-5 text-center glass shadow" +
        (props.className ? props.className : "")
      }
    >
      <Icon className="icon text-info mx-auto mb-1 shadow p-1 glass border border-2 border-info rounded-circle" width="4em" height="4em" />
      <h4 className="card-header p-1 pb-3">{title}</h4>
      <div className="card-body text-white mx-1 mx-md-5">
        <div className="card-text lead pb-3 pt-2">{text}</div>
        {buttonText && (
          <button className="btn btn-outline-success btn-outline">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
