import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt=" not found"></img>
          <h3>Ooh!! Page not found</h3>
          <p>we cant seem to find the page you are looking for. </p>
          <Link to="/">Back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something Went Wrong🥲🥲</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
