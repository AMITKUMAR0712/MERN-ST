import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoIcon from "./LogoIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div className="logo-text">
          <div className="search__container">
            <input className="search__input" type="text" placeholder="Search" />
          </div>

          <div className="credits__container"></div>
        </div>
        <div className="btn-container">
          <Link to="/register" className="btn register-link">
            SignUp
          </Link>
          <Link to="/login" className="btn ">
            Login
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
