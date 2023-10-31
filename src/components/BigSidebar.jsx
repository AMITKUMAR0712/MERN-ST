import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import LogoIcon from './LogoIcon';
import {useDashboardContext} from '../pages/DashboardLayout';

const BigSidebar = () => {
  const {showSidebar}= useDashboardContext()
  return <Wrapper>
    <div className={showSidebar?'sidebar-container show-sidebar':'sidebar-container'}>
   <div className="content">
    <header>
      <LogoIcon />
      
    </header>
    <NavLinks isBigSidebar/>
   </div>

    </div>
  </Wrapper>;
};

export default BigSidebar;
