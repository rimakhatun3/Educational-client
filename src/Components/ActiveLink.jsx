
import { NavLink } from "react-router-dom";
const ActiveLink = ({to,children}) => {
  return (
    <NavLink
    to={to}
    className={({ isActive }) =>
       isActive ? "border-b-2 border-green-600 hover:bg-green-500 pb-2 "  : ""
    }
  >
    {children}
  </NavLink>
  );
};

export default ActiveLink;