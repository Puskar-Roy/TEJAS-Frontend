import React, { useEffect, useState } from "react";
import "./Result.css";
import "react-loading-skeleton/dist/skeleton.css";
import video from "../../assets/bg2.mp4";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";

interface Prediction {
  SCORE: number;
  InTop1Million: boolean;
  InURLVoidBlackList: boolean;
  isHTTPS: boolean;
  hasSSLCertificate: boolean;
  GoogleSafePassed: boolean;
  NortanWebSafePassed: boolean;
  InMcaffeBlackList: boolean;
  InSucuriBlacklist: boolean;
  isTemporaryDomain: boolean;
  isOlderThan3Months: boolean;
  isBlackListedinIpSets: boolean;
  target_urls: string[];
}

interface ResponseData {
  prediction: Prediction;
}

const Resultt: React.FC = () => {
  const { domain } = useParams<{ domain: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<Prediction | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!domain) {
          navigate("/");
        } else {
          const res = await axios.post<ResponseData>(
            "https://tejasbackend-89zq.onrender.com/predict",
            {
              url: domain,
            }
          );
          setData(res.data.prediction);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [domain, navigate]);

  return (
    <div className="res_Container">
      <video src={video} muted autoPlay loop></video>
      <h1 className="res_Title">Result</h1>

      <div className="res_main">
        {data ? (
          <div className="urlContent">
            <h1 className="urlName">
              Domain Name - <span className="url">{domain}</span>
            </h1>
            {data && (
              <div>
                <h1 className="urlName">
                  Safe Score - <span className="url">{data.SCORE}</span>
                </h1>
                <h1 className="urlName">
                  Google Safe Search -{" "}
                  <span className="url">
                    {data.GoogleSafePassed ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  InMcaffeBlackList -{" "}
                  <span className="url">
                    {data.InMcaffeBlackList ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  InSucuriBlacklist -{" "}
                  <span className="url">
                    {data.InSucuriBlacklist ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  InTop1Million -{" "}
                  <span className="url">
                    {data.InTop1Million ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  InURLVoidBlackList -{" "}
                  <span className="url">
                    {data.InURLVoidBlackList ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  NortanWebSafePassed -{" "}
                  <span className="url">
                    {data.NortanWebSafePassed ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  hasSSLCertificate -{" "}
                  <span className="url">
                    {data.hasSSLCertificate ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  Is BlackListedinIpSets -{" "}
                  <span className="url">
                    {data.isBlackListedinIpSets ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  Is HTTPS -{" "}
                  <span className="url">{data.isHTTPS ? "Yes" : "No"}</span>
                </h1>
                <h1 className="urlName">
                  Older Than 3 Months -{" "}
                  <span className="url">
                    {data.isOlderThan3Months ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  TemporaryDomain -{" "}
                  <span className="url">
                    {data.isTemporaryDomain ? "Yes" : "No"}
                  </span>
                </h1>
                <h1 className="urlName">
                  target_urls -{" "}
                  <span className="url">{data.target_urls ? "Yes" : "No"}</span>
                </h1>
              </div>
            )}
          </div>
        ) : (
          <div className="loder">
            <MagnifyingGlass
              visible={true}
              height={80}
              width={80}
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Resultt;
