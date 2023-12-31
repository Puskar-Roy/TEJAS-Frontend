import './Search.css'
import image from '../../assets/4.png'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <section className="searchSection">
      <div className="bgContainer">
        <img className="bgImage" src={image} alt="image" />
        <div className="searchInput">
          <input type="text" placeholder="Enter Domain Name..." />
          <button className="btnSearch">
            <FaSearch /> Scan URL
          </button>
        </div>
      </div>
    </section>
  );
}

export default Search
