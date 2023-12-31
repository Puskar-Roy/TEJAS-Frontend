import './Search.css'
import image from '../../assets/4.png'
const Search = () => {
  return (
    <section className='searchSection'>
      <div className="bgContainer">
        <img className='bgImage' src={image} alt="image" />
        <div className="searchInput">
            <input type="text" placeholder='Enter Your Domain Link...' />
            {/* <button className='btnSearch'> Search</button> */}
        </div>
      </div>
    </section>
  );
}

export default Search
