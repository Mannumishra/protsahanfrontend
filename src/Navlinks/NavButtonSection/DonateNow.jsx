import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DonateNow = () => {
  const [data, setData] = useState({
    donation: '',
    sirName: '',
    firstName: '',
    lastName: '',
    dob: '',
    panNo: '',
    email: '',
    mobile: '',
    address: '',
    country: '',
    state: '',
    city: '',
    pinCode: '',
    citizenship: '',
    helpMessage: ''
  })
  const formField = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }
  const formSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://protsahan.onrender.com/api/volunteer', data)
      if(response.status===200){
        toast.success("Record Send Successfully")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="container Allpagemargin">
        <div
          className="mt-5 mb-5"
          style={{ boxShadow: '0px 0px 37px 0px lightgray', padding: "2rem" }}
        >
          <h1 style={{ color: "#00C851", marginBottom: "2rem" }}>
            MEMBERSHIP FORM
          </h1>

          <form onSubmit={formSubmit} action="">
            <div className="row" style={{ lineHeight: "34px" }}>
              <div className="col-md-12">
                <h4 style={{ color: "#ff4444", marginBottom: "2rem" }}>
                  <u>Select Type of Donation</u>
                </h4>
                <div>
                  <select onChange={formField} style={{ width: "100%" }} name="donation" id="">
                    <option value="Select">Select</option>
                    <option value="Financial Donation">Financial Donation</option>
                    <option value="Stationary Donation">Stationary Donation</option>
                    <option value="Cloth Donation">Cloth Donation</option>
                    <option value="Organ Donation">Organ Donation</option>
                  </select>
                </div>
              </div>
              <h4 className="mt-2" style={{ color: "#ff4444", marginBottom: "2rem" }}>
                <u>Personal Detail</u>
              </h4>
              <div className="col-md-2">
                <div>
                  <label htmlFor="">Title</label>
                  <select onChange={formField} style={{ width: "100%" }} name="sirName" id="">
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
                  <input onChange={formField}
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div>
                  <label htmlFor="">Last Name*</label>
                  <input onChange={formField}
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <label htmlFor="">Date Of Birth</label>
                  <div className="col-md-12">
                    <input onChange={formField} className="form-control" name="dob" type="date" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="">PAN No.</label>
                <div>
                  <input onChange={formField}
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="000 000 0000"
                    name="panNo"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="">Email:</label>
                <input onChange={formField}
                  style={{ width: "100%" }}
                  type="email"
                  placeholder="test@gmail.com"
                  name="email"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="">Mobile No.</label>
                <input onChange={formField}
                  style={{ width: "100%" }}
                  type="text"
                  placeholder="0000 000 000"
                  name="mobile"
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
                  <textarea rows="4" cols="65" name="address" id="" onChange={formField}></textarea>
                </div>
                <div className="col-md-6">
                  <label for="country">Choose a country:</label>
                  <select onChange={formField} style={{ width: "100%" }} id="country" name="country">
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
                    <input onChange={formField}
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="State"
                      name="state"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="">City</label>
                  <input onChange={formField}
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="City"
                    name="city"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Pin/Zip Code</label>
                  <input onChange={formField}
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Pin / Zip Code"
                    name="pinCode"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Citizenship</label>
                  <select onChange={formField} style={{ width: "100%" }} name="citizenship" id="">
                    <option value="Select">Select</option>
                    <option value="Indian Resident">Indian Resident</option>
                    <option value="Non Resident Indian">Non Resident Indian</option>
                    <option value="Foreign National">Foreign National</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="">
                    How Can I Help You <b>Prothsahan Team</b>
                  </label>
                  <textarea cols="67" rows="3" name="helpMessage" id="" onChange={formField}></textarea>
                </div>
                <div className="col-md-12 text-center mt-3">
                  <p style={{ background: '#ff4444', padding: '1rem', color: 'white', fontSize: '20px' }}>
                    I would like  50% tax deduction on this donation.
                  </p>
                  <h5 className="mb-3">
                    THANK YOU FOR CHOOSING TO DONATE TO PROTHSAHAN TEAM.
                  </h5>
                  <hr className="mb-5" />
                  <button style={{ width: "40%", padding: '1rem 4rem', background: '#ff4444' }} className="btn btn-danger">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonateNow;
