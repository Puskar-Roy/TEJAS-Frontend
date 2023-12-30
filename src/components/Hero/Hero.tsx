import video from "../../assets/bg2.mp4";
import Search from "../Search/Search";
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <video src={video} muted autoPlay loop ></video>
      <Search/>
    </div>
  );
};

export default Hero;
