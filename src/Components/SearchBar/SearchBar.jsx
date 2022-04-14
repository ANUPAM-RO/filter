import { useState } from "react";
import "./searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Info from "../../Data.json";
import AppDetails from "../appDetails/AppDetails";
import AllApp from "../allApps/AllApp";
const SearchBar = () => {
  const [filterData, setFilterData] = useState("");
  const handleFilter = (e) => {
    setFilterData(e.target.value);
  };
  let newfilter = Info.filter((value) => {
    return Object.keys(value).some((key) =>
      value[key]
        .toString()
        .toLocaleLowerCase()
        .includes(filterData.toString().toLocaleLowerCase())
    );
  });

  return (
    <div className="search">
      <div className="searchInputs">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input
          type="text"
          className="input"
          placeholder="Search for topic name, concept or any game"
          value={filterData}
          onChange={handleFilter}
        />
        <button className="search-btn">SEARCH</button>
      </div>
      <AllApp />
      <AppDetails Data={newfilter} />
    </div>
  );
};

export default SearchBar;
