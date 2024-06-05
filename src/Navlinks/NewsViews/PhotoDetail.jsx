import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const PhotoDetail = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const getApiData = async () => {
    try {
      let res = await axios.get(
        "https://api.prothsahanteam.org/api/gallery/" + _id
      );
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="container Allpagemargin">
        <div className="mb-5">
          <div className="row">
            <div className="col-md-12">
              <h1>
                {data.title}
              </h1>
            </div>
            <>
              <div className="row">

                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image1} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image2} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image3} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image4} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image5} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image6} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image7} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image8} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image9} alt="" />
                </div>
                <div className="col-md-4 mb-4">
                  <img width={"100%"} src={data.image10} alt="" />
                </div>

              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoDetail;
