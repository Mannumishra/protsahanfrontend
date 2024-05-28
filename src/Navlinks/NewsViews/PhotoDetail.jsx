import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import image1 from "../../HomePage/images/photo1.jpg";
import stressTest1 from "../../HomePage/images/photo1---2.jpg";
import stressTest2 from "../../HomePage/images/photo1---3.jpg";
import stressTest3 from "../../HomePage/images/photo1---4.jpg";
import stressTest4 from "../../HomePage/images/photo1---5.jpg";
import stressTest5 from "../../HomePage/images/photo1---6.jpg";
import stressTest6 from "../../HomePage/images/photo1---7.jpg";
import stressTest7 from "../../HomePage/images/photo1---8.jpg";
import image2 from "../../HomePage/images/photo2.jpg";
import healthCare1 from "../../HomePage/images/healthCamp1.jpeg";
import healthCare2 from "../../HomePage/images/healthCamp2.jpeg";
import healthCare3 from "../../HomePage/images/healthCamp3.jpeg";
import healthCare4 from "../../HomePage/images/healthCamp4.jpeg";
import healthCare5 from "../../HomePage/images/healthCamp5.jpeg";
import healthCare6 from "../../HomePage/images/healthCamp6.jpeg";
import image3 from "../../HomePage/images/photo3.jpg";
import medicalCamp1 from "../../HomePage/images/medicalCamp1.jpg";
import medicalCamp2 from "../../HomePage/images/medicalCamp2.jpg";
import medicalCamp3 from "../../HomePage/images/medicalCamp3.jpg";
import image4 from "../../HomePage/images/photo4.jpg";
import health1 from "../../HomePage/images/health1.jpg";
import health2 from "../../HomePage/images/health2.jpg";
import health3 from "../../HomePage/images/health3.jpg";
import health4 from "../../HomePage/images/health4.jpg";
import image5 from "../../HomePage/images/photo5.jpg";
import health5 from "../../HomePage/images/health5.jpg";
import health6 from "../../HomePage/images/health6.jpg";
import health7 from "../../HomePage/images/health7.jpg";
import health8 from "../../HomePage/images/health8.jpg";
import image6 from "../../HomePage/images/photo6.jpg";
import plantation1 from "../../HomePage/images/plantationImage1.jpg";
import plantation2 from "../../HomePage/images/plantationImage2.jpg";
import plantation3 from "../../HomePage/images/plantationImage3.jpg";
import plantation4 from "../../HomePage/images/plantationImage4.jpg";
import plantation5 from "../../HomePage/images/plantationImage5.jpg";
import plantation6 from "../../HomePage/images/plantationImage6.jpg";
import image7 from "../../HomePage/images/photo7.jpg";
import plantation7 from "../../HomePage/images/plantationImage7.jpg";
import plantation8 from "../../HomePage/images/plantationImage8.jpg";
import plantation9 from "../../HomePage/images/plantationImage9.jpg";
import plantation10 from "../../HomePage/images/plantationImage10.jpg";
import image8 from "../../HomePage/images/photo8.jpg";
import cpr1 from "../../HomePage/images/cprimage1.jpg";
import cpr2 from "../../HomePage/images/cprimage2.jpg";
import cpr3 from "../../HomePage/images/cprimage3.jpg";
import cpr4 from "../../HomePage/images/cprimage4.jpg";
import cpr5 from "../../HomePage/images/cprimage5.jpg";
import cpr6 from "../../HomePage/images/cprimage6.jpg";
import image9 from "../../HomePage/images/photo9.jpg";
import medical1 from "../../HomePage/images/medicalCamp4.jpg";
import medical2 from "../../HomePage/images/medicalCamp5.jpg";
import medical3 from "../../HomePage/images/medicalCamp6.jpg";
import medical4 from "../../HomePage/images/medicalCamp7.jpg";
import medical5 from "../../HomePage/images/medicalCamp8.jpg";
import medical6 from "../../HomePage/images/medicalCamp9.jpg";
import image10 from "../../HomePage/images/photo10.jpg";
import stres1 from "../../HomePage/images/stressTest1.jpg";
import stres2 from "../../HomePage/images/stressTest2.jpg";
import stres3 from "../../HomePage/images/stressTest3.jpg";
import stres4 from "../../HomePage/images/stressTest4.jpg";
import image11 from "../../HomePage/images/stressTest1.jpg";
import cprcamp1 from "../../HomePage/images/cpr1.jpeg";
import cprcamp2 from "../../HomePage/images/cpr2.jpeg";
import cprcamp3 from "../../HomePage/images/cpr3.jpeg";
import cprcamp4 from "../../HomePage/images/cpr4.jpeg";
import cprcamp5 from "../../HomePage/images/cpr5.jpeg";

import stress1 from "../../HomePage/images/stressTest5.jpg";
import stress2 from "../../HomePage/images/stressTest6.jpg";
import stress3 from "../../HomePage/images/stressTest7.jpg";

import image12 from "../../HomePage/images/photo12.jpg";
import image13 from "../../HomePage/images/photo13.jpg";
import image14 from "../../HomePage/images/photo14.jpg";
import tobaco from "../../HomePage/images/tobacco.jpg";
import image15 from "../../HomePage/images/photo15.jpg";
import image16 from "../../HomePage/images/photo16.jpg";
import image17 from "../../HomePage/images/photo17.jpg";
import image18 from "../../HomePage/images/photo18.jpg";
import image19 from "../../HomePage/images/photo19.jpg";
import tobacco1 from "../../HomePage/images/tobacco1.jpg";
import tobacco2 from "../../HomePage/images/tobacco2.jpg";
import tobacco3 from "../../HomePage/images/tobacco3.jpg";
import conserve1 from "../../HomePage/images/conserve1.jpg";
import conserve2 from "../../HomePage/images/conserve2.jpg";
import conserve3 from "../../HomePage/images/conserve3.jpg";
import conserve4 from "../../HomePage/images/conserve4.jpg";
import conserve5 from "../../HomePage/images/conserve5.jpg";
import conserve6 from "../../HomePage/images/conserve6.jpg";
import blood1 from '../../HomePage/images/bloodDonation.jpeg'
import blood2 from '../../HomePage/images/bloodDonation1.jpeg'
import blood3 from '../../HomePage/images/bloodDonation2.jpeg'
import blood4 from '../../HomePage/images/bloodDonation4.jpg'
import blood5 from '../../HomePage/images/bloodDonation5.jpg'
import blood6 from '../../HomePage/images/bloodDonation6.jpeg'
import awareness1 from '../../HomePage/images/awareness1.jpg'
import awareness2 from '../../HomePage/images/awareness2.jpg'
import awareness3 from '../../HomePage/images/awareness3.jpg'
import awareness4 from '../../HomePage/images/awareness4.jpg'



const PhotoDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  // alert(id)
  const imageArr = [
    {
      id: "1",
      image: [
        image1,
        stressTest1,
        stressTest2,
        stressTest3,
        stressTest4,
        stressTest5,
        stressTest6,
        stressTest7,
      ],
      title: "Album Title",
      name: "Stress Test",
      totalPhoto: "Total Photos : 8",
    },
    {
      id: "2",
      image: [
        image2,
        healthCare1,
        healthCare2,
        healthCare3,
        healthCare4,
        healthCare5,
        healthCare6,
      ],
      title: "Album Title",
      name: "Health Camp",
      totalPhoto: "Total Photos : 7",
    },
    {
      id: "3",
      image: [image3, medicalCamp1, medicalCamp2, medicalCamp3],
      title: "Album Title",
      name: "Medical Camp",
      totalPhoto: "Total Photos : 7",
    },
    {
      id: "4",
      image: [image4, health1, health2, health3, health4],
      title: "Album Title",
      name: "Health Camp",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "5",
      image: [image5, health5, health6, health7, health8],
      title: "Album Title",
      name: "Health Camp",
      totalPhoto: "Total Photos : 4",
    },
    {
      id: "6",
      image: [
        image6,
        plantation1,
        plantation2,
        plantation3,
        plantation4,
        plantation5,
        plantation6,
      ],
      title: "Album Title :",
      name: "Plantation",
      totalPhoto: "Total Photos : 8",
    },
    {
      id: "7",
      image: [image7, plantation7, plantation8, plantation9, plantation10],
      title: "Album Title",
      name: "Plantation",
      totalPhoto: "Total Photos : 6",
    },
    {
      id: "8",
      image: [image8, cpr1, cpr2, cpr3, cpr4, cpr5, cpr6],
      title: "Album Title",
      name: "CPR Camp",
      totalPhoto: "Total Photos : 9",
    },
    {
      id: "9",
      image: [
        image9,
        medical1,
        medical2,
        medical3,
        medical4,
        medical5,
        medical6,
      ],
      title: "Album Title",
      name: "Medical Camp",
      totalPhoto: "Total Photos : 6",
    },
    {
      id: "10",
      image: [image10, stres1, stres2, stres3, stres4],
      title: "Album Title",
      name: "Stress Test",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "11",
      image: [image12, stress1, stress2, stress3],
      title: "Album Title",
      name: "Stress Test",
      totalPhoto: "Total Photos : 4",
    },
    {
      id: "12",
      image: [image12, cprcamp1, cprcamp2, cprcamp3, cprcamp4, cprcamp5],
      title: "Album Title",
      name: "CPR Camp",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "13",
      image: [image14, tobaco],
      title: "Album Title",
      name: "Health Camp with NDRF",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "14",
      image: [image15,tobacco1,tobacco2,tobacco3],
      title: "Album Title",
      name: '"SAY NO to Tobacco" March',
      totalPhoto: "Total Photos : 2",
    },
    {
      id: "15",
      image: [conserve1,conserve2,conserve3,conserve4,conserve5,conserve6],
      title: "Album Title",
      name: "CONZERVE with AIESEC Delhi University",
      totalPhoto: "Total Photos : 7",
    },
    {
      id: "16",
      image: [image16,blood1,blood2,blood3,blood4,blood5,blood6],
      title: "Album Title",
      name: "BLOOD DONATION & HEALTH",
      totalPhoto: "Total Photos : 8",
    },
    {
      id: "17",
      image: [image18,awareness1,awareness2,awareness3,awareness4],
      title: "Album Title",
      name: "Awareness on Eye Donation",
      totalPhoto: "Total Photos : 5",
    },
    {
      id: "18",
      image: image18,
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
  const data = imageArr.find((x) => x.id === id);
  // console.log(data);
  const images = Array.isArray(data.image) ? data.image : [data.image];
  return (
    <>
      <div className="container Allpagemargin">
        <div className="mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <h3>{data.name}</h3>
            </div>
            {images.length > 0 ? (
              images.map((item, index) => (
                <div key={index} className="col-md-4 mb-5">
                  <img src={item} alt="" width="100%" />
                </div>
              ))
            ) : (
              <img src={data.image} alt="" width="100%" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoDetail;
