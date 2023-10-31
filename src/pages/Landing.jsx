import Wrapper from "../assets/wrappers/LandingPage";
import main12 from "../assets/images/main12.svg";
import { Link } from "react-router-dom";
import { LogoIcon } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <LogoIcon />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Franchise<span> Today</span> itself.
          </h1>
          <p>
            Im baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Explore The website
          </Link>
        </div>
        <img src={main12}></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
