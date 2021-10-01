const Card = ({ title, text, icon, buttonText }, props) => {
  console.log(icon);
  const Icon = icon;
  return (
    <div
      text="info"
      className={
        "card col m-3 text-center glass shadow" +
        (props.className ? props.className : "")
      }
    >
      <h4 className="card-header text-info p-1">
        <Icon className="mx-2 mb-1" width="2em" height="2em" />
        {title}
      </h4>
      <div className="card-body mx-5">
        <div className="card-text lead pb-3">{text}</div>
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
