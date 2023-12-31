import "./Search.css";
import image from "../../assets/4.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [domain, setDomain] = useState<string>("");

  const handleDomainChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
  };

  const handleSearchClick = () => {
    console.log(domain);
    
    navigate(`/result/${domain}`);
  };

  return (
    <section className="searchSection">
      <div className="bgContainer">
        <img className="bgImage" src={image} alt="image" />
        <div className="searchInput">
          <input
            type="text"
            value={domain}
            onChange={handleDomainChange}
            placeholder="Enter Domain Name..."
          />
          <button onClick={handleSearchClick} className="btnSearch">
            <FaSearch /> Scan URL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
