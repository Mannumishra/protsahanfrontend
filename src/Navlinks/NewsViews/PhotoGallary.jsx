import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PhotoGallary = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.prothsahanteam.org/api/gallery")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <div className="container Allpagemargin">
        <div>
          <div>
            <h1
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Our Gallery
            </h1>
          </div>
          <div className="row">
            {data.map((item) => (
              <div className="col-md-4">
                <div
                  style={{
                    padding: "1rem",
                    boxShadow: "0px 0px 30px -8px lightgray",
                    marginBottom: "2rem",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    className="contain"
                    style={{
                      width: "100%",
                      height: "30vh",
                      overflow: "hidden",
                      marginBottom: "1rem",
                    }}
                  >
                    <Link to={`/photodetail/${item._id}`}>
                      <img width="100%" src={item.image1} alt="" />
                    </Link>
                  </div>
                  <hr />
                  <div>
                    <h5>
                      Album Title: {item.title}
                    </h5>
                    <h6>{item.description}</h6>
                    <div>{item.totalPhoto}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallary;
