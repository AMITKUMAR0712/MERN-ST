import { FaTimesCircle } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoIcon from "./LogoIcon";
import links from "../utils/links";
import NavLinks from "./NavLinks";
const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useDashboardContext();


  return (
    <Wrapper>
      <div className={showSidebar? 'sidebar-container show-sidebar':'sidebar-container'
    }>
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar} >
            <FaTimesCircle />
          </button>
          <header>
            <LogoIcon />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
