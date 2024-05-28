import React, { useState } from "react";
import "../AboutUs/ourTeam.css";

const JoinUs = () => {
  const [data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    date: "",
    month: "",
    year: "",
    panNo: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    citizenship: "",
    helpMessage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="Allpagemargin">
      <div
        style={{ padding: "1rem", background: "brown", textAlign: "center" }}
      >
        <h1 style={{ color: "white" }}>MEMBERSHIP FORM</h1>
      </div>
      <div className="container">
        <div
          className="mt-5 mb-5"
          style={{ padding: "2rem", boxShadow: "0px 0px 37px 0px lightgray" }}
        >
          <h4 style={{ color: "#ff4444", marginBottom: "2rem" }}>
            <u>Personal Detail</u>
          </h4>
          <form action="" onSubmit={formSubmit}>
            <div className="row" style={{ lineHeight: "34px" }}>
              <div className="col-md-2 col-sm-12">
                <div>
                  <label htmlFor="">Title</label>
                  <select
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    name="title"
                    id=""
                  >
                    <option value="Select">Select</option>
                    <option value="Mr">Mr.</option>
                    <option value="Ms">Ms.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-5 col-6">
                <div>
                  <label htmlFor="">First Name*</label>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="text"
                    name="firstName"
                  />
                </div>
              </div>
              <div className="col-md-5 col-6">
                <div>
                  <label htmlFor="">Last Name*</label>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="text"
                    name="lastName"
                  />
                </div>
              </div>

              <div className="col-md-6 col-6">
                <div className="row">
                  <label htmlFor="">Date Of Birth</label>
                  <div className="col-md-4">
                    <select
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      name="date"
                      id=""
                    >
                      <option value="select">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      name="month"
                      id=""
                    >
                      <option value="Select">Select</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      name="year"
                      id=""
                    >
                      <option value="Select">Select</option>
                      <option value="1990">1990</option>
                      <option value="1991">1991</option>
                      <option value="1992">1992</option>
                      <option value="1993">1993</option>
                      <option value="1994">1994</option>
                      <option value="1995">1995</option>
                      <option value="1996">1996</option>
                      <option value="1997">1997</option>
                      <option value="1998">1998</option>
                      <option value="1999">1999</option>
                      <option value="2000">2000</option>
                      <option value="2001">2001</option>
                      <option value="2002">2002</option>
                      <option value="2003">2003</option>
                      <option value="2004">2004</option>
                      <option value="2005">2005</option>
                      <option value="2006">2006</option>
                      <option value="2007">2007</option>
                      <option value="2008">2008</option>
                      <option value="2009">2009</option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-6">
                <label htmlFor="">PAN No.</label>
                <div>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="number"
                    name="panNo"
                  />
                </div>
              </div>
              <div className="col-md-6 col-6">
                <label htmlFor="">Email:</label>
                <input
                  onChange={handleChange}
                  name="email"
                  style={{ width: "100%" }}
                  type="email"
                />
              </div>
              <div className="col-md-6 col-6">
                <label htmlFor="">Mobile No.</label>
                <input
                  onChange={handleChange}
                  name="mobile"
                  style={{ width: "100%" }}
                  type="number"
                />
              </div>
            </div>

            <div className="mt-5">
              <h4
                style={{ color: "#ff4444", marginBottom: "2rem" }}
                className="mb-2"
              >
                <u>Contact Detail</u>
              </h4>
              <div style={{ lineHeight: "33px" }} className="row">
                <div className="col-md-6 textArea">
                  <label htmlFor="">Address</label>
                  <textarea
                  onChange={handleChange}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="address"
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label for="country">Choose a country:</label>
                  <select
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    id="country"
                    name="country">
                    <option value="afghanistan">Afghanistan</option>
                    <option value="argentina">Argentina</option>
                    <option value="australia">Australia</option>
                    <option value="brazil">Brazil</option>
                    <option value="canada">Canada</option>
                    <option value="china">China</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="india">India</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="italy">Italy</option>
                    <option value="japan">Japan</option>
                    <option value="mexico">Mexico</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="russia">Russia</option>
                    <option value="saudi_arabia">Saudi Arabia</option>
                    <option value="south_africa">South Africa</option>
                    <option value="south_korea">South Korea</option>
                    <option value="united_kingdom">United Kingdom</option>
                    <option value="united_states">United States</option>
                  </select>

                  <div>
                    <label htmlFor="">State</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="state"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="">City</label>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="text"
                    name="city"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Pin/Zip Code</label>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="number"
                    name="pinCode"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Citizenship</label>
                  <select
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    name="citizenship"
                    id=""
                  >
                    <option value="Select">Select</option>
                    <option value="Indian Resident">Indian Resident</option>
                    <option value="Non Resident Indian">
                      Non Resident Indian
                    </option>
                    <option value="Foreign National">Foreign National</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="">
                    How Can I Help You <b>Prothsahan Team</b>
                  </label>
                  <textarea
                  onChange={handleChange}
                    name="helpMessage"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="row mt-5" style={{ lineHeight: "33px" }}>
                <div className="col-md-6">
                  <div
                    style={{
                      background: "#ffbb33",
                      padding: "1rem",
                      textAlign: "center",
                      color: "white",
                      alignItems: "center",
                    }}
                  >
                    Reference 1
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      background: "#ffbb33",
                      padding: "1rem",
                      textAlign: "center",
                      color: "white",
                      alignItems: "center",
                    }}
                  >
                    Reference 2
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Name</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Name</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Occupation</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Occupation</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Address</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Address</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Contact No.</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Contact No.</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="text-center">
                    <button
                      style={{ width: "40%", padding: "1rem 4rem" }}
                      className="btn btn-danger"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
