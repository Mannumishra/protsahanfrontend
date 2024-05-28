import React from "react";
import image1 from "../../HomePage/images/photo1.jpg";
import image2 from "../../HomePage/images/photo2.jpg";
import image3 from "../../HomePage/images/photo3.jpg";
import image4 from "../../HomePage/images/photo4.jpg";
import image5 from "../../HomePage/images/photo5.jpg";
import image6 from "../../HomePage/images/photo6.jpg";
import image7 from "../../HomePage/images/photo7.jpg";
import image8 from "../../HomePage/images/photo8.jpg";
import image9 from "../../HomePage/images/photo9.jpg";
import image10 from "../../HomePage/images/photo10.jpg";
import image11 from "../../HomePage/images/cpr1.jpeg";
import image12 from "../../HomePage/images/photo12.jpg";
import image13 from "../../HomePage/images/photo13.jpg";
import image14 from "../../HomePage/images/photo14.jpg";
import image15 from "../../HomePage/images/photo15.jpg";
import image16 from "../../HomePage/images/photo16.jpg";
import image17 from "../../HomePage/images/photo17.jpg";
import image18 from "../../HomePage/images/photo18.jpg";
import image19 from "../../HomePage/images/photo19.jpg";
import crp5 from "../../HomePage/images/cpr5.jpeg";
import { Link } from "react-router-dom";

const PhotoGallary = () => {
  const imageArr = [
    {
      id: "1",
      image: image1,
      title: "Album Title",
      name: "Stress Test",
      totalPhoto: "Total Photos : 8",
    },
    {
      id: "2",
      image: image2,
      title: "Album Title",
      name: "Health Camp",
      totalPhoto: "Total Photos : 7",
    },
    {
      id: "3",
      image: image3,
      title: "Album Title",
      name: "Medical Camp",
      totalPhoto: "Total Photos : 7",
    },
    {
      id: "4",
      image: image4,
      title: "Album Title",
      name: "Health Camp",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "5",
      image: image5,
      title: "Album Title",
      name: "Health Camp",
      totalPhoto: "Total Photos : 4",
    },
    {
      id: "6",
      image: image6,
      title: "Album Title :",
      name: "Plantation",
      totalPhoto: "Total Photos : 8",
    },
    {
      id: "7",
      image: image7,
      title: "Album Title",
      name: "Plantation",
      totalPhoto: "Total Photos : 6",
    },
    {
      id: "8",
      image: image8,
      title: "Album Title",
      name: "CPR Camp",
      totalPhoto: "Total Photos : 9",
    },
    {
      id: "9",
      image: image9,
      title: "Album Title",
      name: "Medical Camp",
      totalPhoto: "Total Photos : 6",
    },
    {
      id: "10",
      image: image10,
      title: "Album Title",
      name: "Stress Test",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "11",
      image: image12,
      title: "Album Title",
      name: "Stress Test",
      totalPhoto: "Total Photos : 4",
    },
    {
      id: "12",
      image: crp5,
      title: "Album Title",
      name: "CPR Camp",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "13",
      image: image14,
      title: "Album Title",
      name: "Health Camp with NDRF",
      totalPhoto: "Total Photos : 2",
    },
    {
      id: "14",
      image: image15,
      title: "Album Title",
      name: '"SAY NO to Tobacco" March',
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "15",
      image: image16,
      title: "Album Title",
      name: "CONZERVE with AIESEC Delhi University",
      totalPhoto: "Total Photos : 7",
    },
    {
      id: "16",
      image: image17,
      title: "Album Title",
      name: "BLOOD DONATION & HEALTH",
      totalPhoto: "Total Photos : 8",
    },
    {
      id: "17",
      image: image18,
      title: "Album Title",
      name: "Awareness on Eye Donation",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "18",
      image: image19,
      title: "Album Title",
      name: "Traffic awareness",
      totalPhoto: "Total Photos : 3",
    },
    {
      id: "19",
      image: image19,
      title: "Album Title",
      name: "Global Warming",
      totalPhoto: "Total Photos : 12",
    },
  ];

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
            {imageArr.map((item) => (
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
                    <Link to={`/Products-Info/${item.id}`}>
                      <img width="100%" src={item.image} alt="" />
                    </Link>
                  </div>
                  <hr />
                  <div>
                    <h5>
                      <b>{item.title}</b>
                    </h5>
                    <p>{item.name}</p>
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
