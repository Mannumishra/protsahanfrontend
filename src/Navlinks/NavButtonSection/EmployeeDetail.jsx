import axios from "axios";
import React, { useEffect, useState } from "react";

const EmployeeDetail = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      let res = await axios.get("https://protsahan.onrender.com/api/job");
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItem = async (_id) => {
    console.log(_id)
    try {
      let res = await axios.delete(
        "https://protsahan.onrender.com/api/job/" +_id
      );
      console.log(res);
      getApiData()
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="container Allpagemargin">
        <div
          className="mt-5 mb-5"
          style={{boxShadow:'0px 0px 37px 0px lightgray', padding: "2rem" }}
        >
          <div className="row">
            <div className="col-md-12">
              <h1 style={{ color: "#00C851", marginBottom: "2rem" }}>
                Youth Empowerment (Job seekers can apply)
              </h1>
              <ul>
                <li style={{ listStyle: "disc !important" }}>
                  ProthsahanTEAM works for YOUTH EMPOWERMENT and offers
                  following jobs.
                </li>
                <li style={{ listStyle: "disc !important" }}>
                  Job seekers can apply online here.
                </li>
                <h5 className="mt-3">
                  Select the organization to which you want to send resume.
                </h5>
              </ul>
              <div style={{width:'100%', overflowX:'auto'}} class="table-container">
              <table className="table table-bordered" width="100%">
                <tr>
                  <th>S.No.</th>
                  <th>Post Vacancy</th>
                  <th>Qualification</th>
                  <th>Experience</th>
                  <th>Package Offered</th>
                  <th>organization Name</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Delete</th>
                </tr>
                <tbody>
                  {data.map((item, index)=>
                <tr>
                  <td>{index+1}</td>
                  <td>{data.vaca}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                  )}
                </tbody>
              </table>
              </div>
              <div>
                <h5 className="mt-5 mb-5"><b> Please Provide Your Detail. </b></h5>
                <div className="row">
                  <div className="col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">
                      Employee Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Employee Name"
                    />
                  </div>
                  <div className="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label">
                      Email ID
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Employee Name"
                    />
                    <div className="mt-3">
                      <p>Resume: <span style={{color:'red'}}>Please Upload PDF Only</span></p>
                    </div>
                    <div>
                    <input class="form-control" type="file" id="formFile" accept="application/pdf" />
                      <div className="d-flex justify-content-center" >
                        <button className="btn btn-success mt-3">
                          Apply Online
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
