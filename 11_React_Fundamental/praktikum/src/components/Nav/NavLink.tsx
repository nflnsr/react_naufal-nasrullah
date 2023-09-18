import { Link } from "react-router-dom";

interface NavLinkProps {
  textContext: string;
  url: string;
  className: string;
  onClickEvent?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ textContext, url, className, onClickEvent }) => {
  return (
    <li className="nav-item">
      <Link to={url} onClick={onClickEvent} className={className}>
        {textContext}
      </Link>
    </li>
  );
};

export default NavLink;
