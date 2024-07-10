import React, { Component } from 'react'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">State/District</h3>
              </div>
              <div className="card-body">
                <form>

                  <div className="mb-3">
                    <label htmlFor="district" className="form-label">Block wise distribution of janpad panchayat</label>
                    <select className="form-select custom-select" id="district">
                      <option selected>----------//----------</option>
                      <option value="dantewada">Dantewada</option>
                      <option value="geedam">Geedam</option>
                      <option value="kateKalyan">Kate Kalyan</option>
                      <option value="kukonda">Kukonda</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="district" className="form-label">Village Panchayat</label>
                    <select className="form-select custom-select" id="district">
                      <option selected>----------//----------</option>
                      <option value="dantewada">Dantewada</option>
                      <option value="geedam">Geedam</option>
                      <option value="kateKalyan">Kate Kalyan</option>
                      <option value="kukonda">Kukonda</option>
                      <option value="dantewada">Dantewada</option>
                      <option value="geedam">Geedam</option>
                      <option value="kateKalyan">Kate Kalyan</option>
                      <option value="kukonda">Kukonda</option>
                      <option value="dantewada">Dantewada</option>
                      <option value="geedam">Geedam</option>
                      <option value="kateKalyan">Kate Kalyan</option>
                      <option value="kukonda">Kukonda</option>
                      <option value="dantewada">Dantewada</option>
                      <option value="geedam">Geedam</option>
                      <option value="kateKalyan">Kate Kalyan</option>
                      <option value="kukonda">Kukonda</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="district" className="form-label">Village Panchayat Project Name</label>
                    <select className="form-select custom-select" id="district">
                      <option selected>----------//----------</option>
                      <option value="dantewada">Health</option>
                      <option value="geedam">Education</option>
                      <option value="kateKalyan">Construction</option>
                    </select>
                  </div>


                  <button type="submit" className="btn btn-primary btn-block mt-0">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

