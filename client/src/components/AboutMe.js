import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <section
      id={props.id}
      className={
        "row row-cols-1 row-cols-md-3 bg-primary pt-2 flex-grow-1 justify-content-center text-white py-2 py-md-5 m-0 " +
        (props.className ? props.className : "")
      }
    >
      <div className="col my-md-4 my-2">Hello!</div>
      <div className="col my-md-4 my-2">Hello!</div>
      <div className="col my-md-4 my-2">Hello!</div>
    </section>
  );
};

export default AboutMe;
