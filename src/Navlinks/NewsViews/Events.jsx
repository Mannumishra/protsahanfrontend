import React from "react";
import "../NewsViews/news.css";
import pressIcon from "../../HomePage/images/press_icon.png";
import imageGallery from "../../HomePage/images/icon-gallery.png";
const Events = () => {
  const dataTable = [
    {
      sno: "1",
      events:
        "March on the streets to create awareness against Global Warming among the citizens of Delhi. Volunteer Suppport : Shri Nav Durga Sai Chhaya Sansthan (Regd) Dilshad Garden, Delhi",
      date: "27/10/2007",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "2",
      events:
        "Traffic awareness by President vivek vashistha & Founder Mr Alok Vashisth in Self Defence Classes organised by Delhi Traffic Road Safety Cell in Sneh International School, Delhi.	",
      date: "09/06/2008",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "3",
      events:
        "Awareness on Eye Donation, Organ Donation, Complete Body Scan & Blood Donation Venue : Gauri Shankar Mandir, Opp. Red Cross Hospital, Near Dilshad Garden Metro Station.	",
      date: "02/10/2008	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "4",
      events:
        "BLOOD DONATION & HEALTH AWARENESS CAMP Venue : Shivaji College , Delhi University, Rajouri Garden Supported by : Rotary Blood Bank & Energy Imaging & Research Centre, Lawrence Road, Delhi (09312011092) Volunteers : Mr Ankit Gupta Team Leader-Shivaji College	",
      date: "05/03/2009	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "5",
      events:
        "Awareness activities on Global Warming Smoking and cancer Traffic Sense & Road Safety	",
      date: "18/01/2018	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "6",
      events: `"SAY NO to Tobacco" March The March was inaugrated by Dr Desai, Director (IHBAS), Mr Naseeb Singh MLA, Mr Farroq Abdulah, Mrs Nafisa Ali - social activist, This march was the initiative of Indian Medical Association and IHBAS . Prothsahanteam NGO participated in the event Venue - RajGhat, New Delhi To - IMA, ITO (HQ), New Delhi Time: morning: 7:30 AM to 9:30 AM followed by refreshment / Magic Show / Street Play.	`,
      date: "31/05/2005	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "7",
      events: "health Camp with NDRF	",
      date: "24/06/2017	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "8",
      events: "CPR CAMP GURGAON	",
      date: "29/09/2018	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "9",
      events:
        "Telling about principal of stress test device to shri P.K. Mishra (IAS)	",
      date: "08/09/2018	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "10",
      events: "Veer Nari Stress Test Camp AT NCC, Delhi Cantt by AWWA & BHDC	",
      date: "18/08/2018	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "11",
      events: "Medical Camp in J & K	",
      date: "13/01/2019	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "12",
      events: "CPR Camp Senior Citizen Ramprastha	",
      date: "05/07/2017",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "13",
      events: "TREE PLANTATION SAHYOG PARK RAMPRASTHA, GHAZIABAD	",
      date: "18/06/2018	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "14",
      events: "TREE PLANTATION SURYANAGAR, GHAZIABAD	",
      date: "19/07/2016	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "15",
      events: "Kabaddi world cup Health Camp	",
      date: "18/11/2016	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "16",
      events: "Swadeshi Jagran Manch Mela	",
      date: "21/10/2016	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "17",
      events: "cheif of Navy Staff in Palwal, Haryana	",
      date: "19/11/2016	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
    {
      sno: "18",
      events: "Health Camp with ITBP at Motibagh",
      date: "14/10/2017	",
      pressImage: pressIcon,
      imageGallery: imageGallery,
    },
  ];
  return (
    <>
      <div className="container Allpagemargin">
        <div
          className="mt-5 mb-5"
          style={{ boxShadow:'0px 0px 37px 0px lightgray', padding: "2rem" }}
        >
          <div>
            <h3 style={{ color: "rgb(0, 200, 81)" }}>Events</h3>
          </div>
          <div style={{width:'100%', overflowX:'auto'}} class="table-container">

          <table className="table table-bordered text-center" width="100%">
            <tr>
              <th>S.No</th>
              <th>Events</th>
              <th className="tableheadwidth">Date</th>
              <th className="tableheadwidth">Press Release</th>
              <th className="tableheadwidth">Image Gallery</th>
            </tr>
            {dataTable.map((item) => (
              <tr>
                <td>{item.sno}</td>
                <td>{item.events}</td>
                <td>{item.date}</td>
                <td>
                  <img style={{background:'#f8f7f5'}} src={item.pressImage} alt="press image" />
                </td>
                <td>
                  <img
                    style={{ width: "72%", background:'#f8f7f5' }}
                    src={item.imageGallery}
                    alt="imagegallery"
                  />
                </td>
              </tr>
            ))}
          </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
