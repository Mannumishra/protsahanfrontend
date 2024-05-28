import React, { useState } from "react";

const Volunteer = () => {
  const [data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    dateofbirth: "",
    pan: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    state: "",
    city: "",
    picCode: "",
    citizenship: "",
  });

  return (
    <>
      <div className="container Allpagemargin">
        <div
          className="mt-5 mb-5"
          style={{ padding: "2rem", boxShadow: "0px 0px 37px 0px lightgray" }}
        >
          <h1 style={{ color: "#00C851", marginBottom: "2rem" }}>
            MEMBERSHIP FORM
          </h1>
          <h4 style={{ color: "#ff4444", marginBottom: "2rem" }}>
            <u>Personal Detail</u>
          </h4>
          <form action="">
            <div className="row" style={{ lineHeight: "34px" }}>
              <div className="col-md-2">
                <div>
                  <label htmlFor="">Title</label>
                  <select style={{ width: "100%" }} name="title" id="">
                    <option value="Select">Select</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-5">
                <div>
                  <label htmlFor="">First Name*</label>
                  <input
                    name="firstName"
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div>
                  <label htmlFor="">Last Name*</label>
                  <input
                    name="lastName"
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <label htmlFor="">Date Of Birth</label>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      name="dateofbirth"
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="">PAN No.</label>
                <div>
                  <input
                    name="pan"
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="000 000 0000"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="">Email:</label>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  type="email"
                  placeholder="test@gmail.com"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="">Mobile No.</label>
                <input
                  name="mobile"
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="0000 000 000"
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
                <div className="col-md-6">
                  <label htmlFor="">Address</label>
                  <textarea rows="4" cols="65" name="address" id=""></textarea>
                </div>
                <div className="col-md-6">
                  <label for="country">Choose a country:</label>
                  <select style={{ width: "100%" }} id="country" name="country">
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
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="State"
                      name="state"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="">City</label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="City"
                    name="city"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Pin/Zip Code</label>
                  <input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Pin / Zip Code"
                    name="pinCode"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Citizenship</label>
                  <select style={{ width: "100%" }} name="citizenship" id="">
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
                  <textarea cols="67" rows="3" name="" id=""></textarea>
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
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Name</label>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Occupation</label>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Name</label>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Address</label>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Address</label>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Contact No.</label>
                    <input
                      style={{ width: "100%" }}
                      type="number"
                      placeholder="0000 000 000"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Contact No.</label>
                    <input
                      style={{ width: "100%" }}
                      type="number"
                      placeholder="0000 000 000"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      style={{ width: "100%" }}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      style={{ width: "100%" }}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="text-center">
                    <button
                      style={{
                        width: "40%",
                        padding: "1rem 4rem",
                        background: "#ff4444",
                      }}
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
    </>
  );
};

export default Volunteer;
