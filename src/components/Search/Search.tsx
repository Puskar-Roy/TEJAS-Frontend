import './Search.css'
const Search = () => {
  return (
    <section className='searchSection'>
      <div className="bgContainer">
        <div className="searchInput">
            <input type="text" placeholder='Enter Your Domain Link...' />
            {/* <button className='btnSearch'> Search</button> */}
        </div>
      </div>
    </section>
  );
}

export default Search
