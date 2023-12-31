import './Result.css'
import "react-loading-skeleton/dist/skeleton.css";
import video from "../../assets/bg2.mp4";

// import { MagnifyingGlass } from "react-loader-spinner";
const Resultt = () => {
  return (
    <div className="res_Container">
      <video src={video} muted autoPlay loop></video>
      <h1 className="res_Title">Result</h1>

      <div className="res_main">
        {/* <div className="loder">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div> */}
        <div className="urlContent">
          <h1 className="urlName">
            Domain Name - <span className='url'>www.google.com</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Resultt
