import { Link } from "react-router-dom";
import { LogoIcon, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <LogoIcon />
        <h4>Login</h4>
        <FormRow type="email" name="Username"></FormRow>
        <FormRow type="password" name="Password" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="submit" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Not a member?{" "}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
