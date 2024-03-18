import Select from "react-select";
import React, { useRef, useState, Component } from 'react';

class FormInfoBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salaries: [],
      experiences: [],
      allowsearch: [],
      languages: [],
      profile: {}
    };
  }

  componentDidMount() {

    this.fetchData();
    this.fetchExperiences();
    this.fetchAllowSearch();
    this.fetchLanguages();
    this.loadProfile();
  }

  fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8095/users/profile/salaries`);
      const jsonData = await response.json();
      this.setState({ salaries: jsonData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchExperiences = async () => {
    try {
      const response = await fetch(`http://localhost:8095/users/profile/experiences`);
      const jsonData = await response.json();
      this.setState({ experiences: jsonData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchAllowSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8095/users/profile/allowsearch`);
      const jsonData = await response.json();
      this.setState({ allowsearch: jsonData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchLanguages = async () => {
    try {
      const response = await fetch(`http://localhost:8095/users/profile/languages`);
      const jsonData = await response.json();
      this.setState({ language: jsonData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  loadProfile = async () => {
    try {
      const response = await fetch(`http://localhost:8095/users/profiles/meinname`);
      const jsonData = await response.json();
      this.setState({ profile: jsonData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  saveProfile = () => {

    fetch('http://localhost:8095/users/profile', {
      method: "POST",
      body: JSON.stringify({
        username: 'meinname',
        firstname: document.getElementById('firstName').value,
        lastname: document.getElementById('lastName').value,
        jobTitle: document.getElementById('jobTitle').value,
        salary: document.getElementById('salary').value,
        expectedSalary: document.getElementById('expectedSalary').value,
        experience: document.getElementById('experience').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        education: document.getElementById('education').value,
        languages: document.getElementById('language').value,
        description: document.getElementById('description').value,
        allowSearch: document.getElementById('allowSearch').value,
        birthday: document.getElementById('birthday').value






      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

  }

  render() {

    const catOptions = [
      { value: "Banking", label: "Banking" },
      { value: "Digital & Creative", label: "Digital & Creative" },
      { value: "Retail", label: "Retail" },
      { value: "Human Resources", label: "Human Resources" },
      { value: "Managemnet", label: "Managemnet" },
      { value: "Accounting & Finance", label: "Accounting & Finance" },
      { value: "Digital", label: "Digital" },
      { value: "Creative Art", label: "Creative Art" },
    ];

    var { salaries } = this.state;
    var { experiences } = this.state;
    var { profile } = this.state;
    var { allowsearch } = this.state;
    var { languages } = this.state;


    return (
      <form action="#" className="default-form">
        <div className="row">
          {/* <!-- Input --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>First Name</label>
            <input id="firstName" type="text" name="name" placeholder="Jerome" required value={profile.firstName} />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label>Last Name</label>
            <input id="lastName" type="text" name="name" placeholder="Kovac" required value={profile.lastName} />
          </div>

          {/* <!-- Input --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Job Title</label>
            <input id="jobTitle" type="text" name="name" placeholder="UI Designer" required value={profile.jobTitle} />
          </div>


          <div className="form-group col-lg-6 col-md-12">
            <label>Birthday</label>
            <input id="birthday" type="date" name="name" placeholder="17.06.2001" required value={profile.birthdate} />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label>Phone</label>
            <input id="phone" type="text" name="name" placeholder="+41 78 861 55 51" required value={profile.phone} />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label>Sprachen</label>
            <select id="language" className="chosen-single form-select" required>
              {languages.map(language => {
                return (
                  <option value={language.key} key={language.key} selected={language.key === profile.language}>{language.value}</option>
                )
              })}
            </select>
            </div>

            <div className="form-group col-lg-3 col-md-12">
              <label>experience</label>
              <select id="experience" className="chosen-single form-select" required>
                {experiences.map(experience => {
                  return (
                    <option value={experience.key} key={experience.key}  selected={experience.key === profile.experience}>{experience.value}</option>
                  )
                })}
              </select>
            </div>

            <div className="form-group col-lg-6 col-md-12">
              <label>email</label>
              <input id="email" type="text" name="name" placeholder="info@jobyz.ch" required value={profile.email} />
            </div>

            <div className="form-group col-lg-6 col-md-12">
              <label>age</label>
              <input id="age" type="text" name="name" placeholder="UI Designer" required value={profile.age} />
            </div>

            <div className="form-group col-lg-6 col-md-12">
              <label>education</label>
              <input id="education" type="text" name="name" placeholder="UI Designer" required value={profile.education} />
            </div>

            <div className="form-group col-lg-6 col-md-12">
              <label>description</label>
              <input id="description" type="text" name="name" placeholder="UI Designer" required value={profile.description} />
            </div>

            {/* <!-- Input --> */}
            <div className="form-group col-lg-3 col-md-12">
              <label>allowSearch</label>
              <select id="allowSearch" className="chosen-single form-select" required>
                {allowsearch.map(allowsearch => {
                  return (
                    <option value={allowsearch.key} key={allowsearch.key}  selected={allowsearch.key === profile.allowsearch}>{allowsearch.value}</option>
                  )
                })}
              </select>
            </div>

            {/* <!-- Input --> */}
            <div className="form-group col-lg-3 col-md-12">
              <label>Current Yearly Salary($)</label>
              <select id="salary" className="chosen-single form-select" required>
                {salaries.map(salary => {
                  return (
                    <option value={salary.key} key={salary.key} selected={salary.key === profile.salary}>{salary.value}</option>
                  )
                })}
              </select>
            </div>

            {/* <!-- Input --> */}
            <div className="form-group col-lg-3 col-md-12">
              <label>Expected Salary($)</label>
              <select id="expectedSalary" className="chosen-single form-select" required>
                {salaries.map(salary => {
                  return (
                    <option value={salary.key} key={salary.key} >{salary.value}</option>
                  )
                })}
              </select>
            </div>



            {/* <!-- Input --> }
          <div className="form-group col-lg-6 col-md-12">
            <label>Experience</label>
            <input type="text" name="name" placeholder="5-10 Years" required />
          </div>

          { <!-- Input --> }
          <div className="form-group col-lg-6 col-md-12">
            <label>Age</label>
            <select className="chosen-single form-select" required>
              <option>23 - 27 Years</option>
              <option>24 - 28 Years</option>
              <option>25 - 29 Years</option>
              <option>26 - 30 Years</option>
            </select>
          </div>

          {/* <!-- Input --> }
          <div className="form-group col-lg-6 col-md-12">
            <label>Education Levels</label>
            <input type="text" name="name" placeholder="Certificate" required />
          </div>

          {/* <!-- Input --> }
          <div className="form-group col-lg-6 col-md-12">
            <label>Languages</label>
            <input
              type="text"
              name="name"
              placeholder="English, Turkish"
              required
            />
          </div>

          {/* <!-- Search Select --> }
          <div className="form-group col-lg-6 col-md-12">
            <label>Categories </label>
            <Select
              defaultValue={[catOptions[1]]}
              isMulti
              name="colors"
              options={catOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              required
            />
          </div>

          {/* <!-- Input --> }
          <div className="form-group col-lg-6 col-md-12">
            <label>Allow In Search & Listing</label>
            <select className="chosen-single form-select" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* <!-- About Company --> }
          <div className="form-group col-lg-12 col-md-12">
            <label>Description</label>
            <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
          </div>

          {/* <!-- Input --> */}
            <div className="form-group col-lg-6 col-md-12">
              <button onClick={() => this.saveProfile()} type="submit" className="theme-btn btn-style-one">
                Save
              </button>
            </div>
          </div>
      </form>
    );
  }
};

export default FormInfoBox;
