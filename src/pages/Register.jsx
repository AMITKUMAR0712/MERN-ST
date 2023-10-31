import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { LogoIcon } from "../components";
import { FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <LogoIcon />
        <h4>Register</h4>
        <FormRow type="text" name="Name" defaultValue="Enter Your Name" />
        <FormRow
          type="text"
          name="Last Name"
          defaultValue="Enter Your Last Name"
        />
        <FormRow
          type="text"
          name="Location"
          defaultValue="Enter Your Location"
        />
        <FormRow type="email" name="Email" defaultValue="Enter Your Email" />
        <FormRow
          type="password"
          name="Password"
          defaultValue="********"
          required
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
