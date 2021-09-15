import Logo from "./Logo"

const Main = (props) => {
    return (
        <main id={props.id} className="row row-cols-1 row-cols-md-2 blue m-0">
            <Logo />
            <div className="col mx-0 my-auto pt-4">
                <Message {...props} />
                <Greeting {...props} />
            </div>
        </main>
    );
}

const Message = ({ isLoaded, message }) => {
    if (!isLoaded) return null;
    return (
      <div id="message" className="row m-0 pt-4">
        <p className="h4">{message}</p>
      </div>
    );
  };
  
  const Greeting = ({ first_name, site_name }) => {
    if (!first_name || !site_name) return <div>Loading ....</div>;
    return (
      <div id="greeting" className="row mx-5">
        <p className="lead">
          My name is {first_name}. I'm a freelance web developer, and founder of{" "}
          <br />
          <a href="/" className="link-info">
            {site_name}
          </a>
        </p>
      </div>
    );
  };

export default Main;