import video from "../../assets/bg2.mp4";
import Search from "../Search/Search";
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <video src={video} muted autoPlay loop></video>
      <div className="heroH">
        <h1 className="headingHero">
          Don't get Hooked by a <span className="headingS">Phish</span> again !
          👮‍♂️
        </h1>
        <p>
          🛡️ Don't be another statistic in the{" "}
          <span className="headingS extra">2.6 million</span> phishing attempts each
          year. Guard yourself with <span className="headingS extra">TEJAS</span> and outsmart the
          phishers. 🚫
        </p>
      </div>
      <Search />
    </div>
  );
};

export default Hero;
