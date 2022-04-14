import SearchBar from "../SearchBar/SearchBar";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <div className="flex">
        <div className="logo">
          <img src="./logo.jpg" alt="" className="logoImg" />
          <span className="logoName">FLEXAGN</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGear} />
          <span className="setting">Setting</span>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
