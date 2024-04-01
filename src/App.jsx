import { useEffect, useState } from "react";
import "./styles/App.css";
import { animateText } from "./components/animateText";
// import "./styles/reset.css";

function App() {
  useEffect(() => {
    animateText();
  }, []);

  return (
    <>
      <section className="edit-cover">
        <nav>
          <section className="menu">
            <i class="fa-solid fa-circle"></i>
            <i class="fa-solid fa-caret-down"></i>
            <i class="fa-solid fa-circle"></i>
          </section>
          <section className="sample-bar">
            <span>Clear</span>
            <i className="fa-solid fa-gear"></i>
          </section>
          <section className="download">
            <i class="fa-solid fa-arrow-down"></i>
          </section>
          <section className="view">
            <span></span>
            <i class="fa-solid fa-eye"></i>
          </section>
        </nav>
        <section className="input-fields">
          <section className="personal-info">
            <p>
              <i class="fa-solid fa-user-large"></i>
              Personal Info
              <span className="open-field">
                <i class="fa-solid fa-arrow-right fa-rotate-270"></i>
                <i class="fa-solid fa-arrow-right fa-rotate-90"></i>
              </span>
            </p>
            <section>
              <div className="field">
                <label for="first-names">
                  First Name(s) <span className="required">Required</span>
                </label>
                <input type="text" name="first-names" id="first-names" required />
              </div>
              <div className="field">
                <label for="last-name">
                  Last Name <span className="required">Required</span>
                </label>
                <input type="text" name="last-name" id="last-name" required />
              </div>
              <div className="field">
                <label for="mail">
                  Email <span className="required">Required</span>
                </label>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="ever@example.com"
                  required
                />
              </div>
              <div className="field">
                <label for="phone">
                  Phone number <span className="required">Required</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+(code)-●●●-●●●-●●●●"
                  required
                />
              </div>
              <div className="field">
                <label for="country-personal">
                  Country <span className="optional">Optional</span>
                </label>
                <input type="text" name="country-personal" id="country-personal" />
              </div>
              <div className="field">
                <label for="city-personal">
                  City <span className="optional">Optional</span>
                </label>
                <input type="text" name="city-personal" id="city-personal" />
              </div>
              <div className="field">
                <label for="address">
                  Address <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="A24/12 Hell Street"
                />
              </div>
              <div className="field-profile">
                <label for="profile">
                  <i class="fa-solid fa-images fa-fade"></i>Upload Picture
                </label>
                <input type="file" name="profile" id="profile" accept="image/*" />
              </div>
            </section>
          </section>
          <section className="education">
            <p>
              <i class="fa-solid fa-user-graduate"></i>
              Education
              <span className="open-field">
                <i class="fa-solid fa-arrow-right fa-rotate-270"></i>
                <i class="fa-solid fa-arrow-right fa-rotate-90"></i>
              </span>
            </p>
            <div className="add">
              <span>
                <i class="fa-solid fa-plus"></i> Education
              </span>
            </div>
            <section>
              <div className="field">
                <label for="school">
                  School <span className="required">Required</span>
                </label>
                <input type="text" name="school" id="school" required />
              </div>
              <div className="field">
                <label for="degree">
                  Degree <span className="required">Required</span>
                </label>
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  placeholder="Bachelor of Science"
                  required
                />
              </div>
              <div className="field">
                <label for="honors">
                  Class Honors <span className="optional">Optional</span>
                </label>
                <input type="text" name="honors" id="honors" placeholder="First Class" />
              </div>
              <div className="field">
                <label for="start-date-education">
                  Start Date <span className="optional">Optional</span>
                </label>
                <input
                  type="date"
                  name="start-date-education"
                  id="start-date-education"
                />
              </div>
              <div className="field">
                <label for="end-date-education">End Date</label>
                <input type="date" name="end-date-education" id="end-date-education" />
              </div>
              <div className="field">
                <label for="country-education">
                  Country <span className="optional">Optional</span>
                </label>
                <input type="text" name="country-education" id="country-education" />
              </div>
              <div className="field">
                <label for="city-education">
                  City <span className="optional">Optional</span>
                </label>
                <input type="text" name="city-education" id="city-education" />
              </div>
              <div className="field-footer">
                <span>
                  <i class="fa-solid fa-eraser"></i> Clear
                </span>
                <span>
                  <i class="fa-solid fa-pencil"></i> Add
                </span>
              </div>
            </section>
          </section>
          <section className="professional">
            <p>
              <i class="fa-solid fa-user-tie"></i>
              Professional Experience
              <span className="open-field">
                <i class="fa-solid fa-arrow-right fa-rotate-270"></i>
                <i class="fa-solid fa-arrow-right fa-rotate-90"></i>
              </span>
            </p>
            <div className="add">
              <span>
                <i class="fa-solid fa-plus"></i> Experience
              </span>
            </div>
            <section>
              <div className="field">
                <label for="company">
                  Company Name <span className="required">Required</span>
                </label>
                <input type="text" name="company" id="company" required />
              </div>
              <div className="field">
                <label for="position">
                  Position <span className="required">Required</span>
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Software Engineer"
                  required
                />
              </div>
              <div className="field">
                <label for="start-date-professional">
                  Start Date <span className="optional">Optional</span>
                </label>
                <input
                  type="date"
                  name="start-date-professional"
                  id="start-date-professional"
                />
              </div>
              <div className="field">
                <label for="end-date-professional">End Date</label>
                <input
                  type="date"
                  name="end-date-professional"
                  id="end-date-professional"
                />
              </div>
              <div className="field">
                <label for="country-professional">
                  Country <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="country-professional"
                  id="country-professional"
                />
              </div>
              <div className="field">
                <label for="city-professional">
                  City <span className="optional">Optional</span>
                </label>
                <input type="text" name="city-professional" id="city-professional" />
              </div>
              <div className="field-description">
                <label for="description">
                  Description <span className="optional">Optional</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="As a software engineer, ..."
                  cols="20"
                  rows="10"
                ></textarea>
              </div>
              <div className="field-footer">
                <span>
                  <i class="fa-solid fa-eraser"></i> Clear
                </span>
                <span>
                  <i class="fa-solid fa-pencil"></i> Add
                </span>
              </div>
            </section>
          </section>
        </section>
      </section>
      <section className="resume-cover"></section>
    </>
  );
}

export { App };
