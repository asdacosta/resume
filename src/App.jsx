import { useEffect, useState } from "react";
import "./styles/App.css";
import { animateText } from "./components/animateText";
import { navigation } from "./components/nav";
import { inputFields } from "./components/inputFields";
import { responsiveTyping } from "./components/responsiveTyping";
// import "./styles/reset.css";

function App() {
  useEffect(() => {
    animateText();
    navigation();
    inputFields();
    responsiveTyping();
  }, []);

  return (
    <>
      <section className="edit-cover">
        <nav>
          <section className="menu">
            <div></div>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-solid fa-caret-down"></i>
            <i class="fa-solid fa-circle"></i>
          </section>
          <section className="dialog">
            <h2>Personalize</h2>
            <ul>
              <li>
                Palette <i class="fa-solid fa-angle-right"></i>
              </li>
              <div className="palette">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
              <li>
                Layout <i class="fa-solid fa-angle-right"></i>
              </li>
              <div className="layout">
                <button className="left-align"></button>
                <button className="right-align"></button>
              </div>
            </ul>
          </section>
          <section className="sample-bar">
            <span>Clear</span>
            <i class="fa-solid fa-circle"></i>
          </section>
          <section className="download">
            <i class="fa-solid fa-arrow-down"></i>
          </section>
          <section className="view">
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
                <input
                  type="text"
                  name="first-names"
                  id="first-names"
                  maxLength={15}
                  required
                />
              </div>
              <div className="field">
                <label for="last-name">
                  Last Name <span className="required">Required</span>
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  maxLength={10}
                  required
                />
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
                  maxLength={25}
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
                  maxLength={18}
                  required
                />
              </div>
              <div className="field">
                <label for="country-personal">
                  Country <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="country-personal"
                  id="country-personal"
                  maxLength={20}
                />
              </div>
              <div className="field">
                <label for="city-personal">
                  City <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="city-personal"
                  id="city-personal"
                  maxLength={20}
                />
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
                  maxLength={25}
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
            <div className="first added">
              <span>School</span>
              <span>
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </div>
            <div className="second added">
              <span>School2</span>
              <span>
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </div>
            <section className="education-fields first">
              <div className="field">
                <label for="school">
                  School <span className="required">Required</span>
                </label>
                <input type="text" name="school" id="school" maxLength={30} required />
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
                  maxLength={35}
                  required
                />
              </div>
              <div className="field">
                <label for="honors">
                  Class Honors <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="honors"
                  id="honors"
                  placeholder="First Class"
                  maxLength={25}
                />
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
                <input
                  type="text"
                  name="country-education"
                  id="country-education"
                  maxLength={20}
                />
              </div>
              <div className="field">
                <label for="city-education">
                  City <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="city-education"
                  id="city-education"
                  maxLength={20}
                />
              </div>
              <div className="field-footer">
                <span className="clear-field">
                  <i class="fa-solid fa-eraser"></i> Clear
                </span>
                <span className="add-field">
                  <i class="fa-solid fa-pencil"></i> Add
                </span>
              </div>
            </section>
            <section className="education-fields second">
              <div className="field">
                <label for="school">
                  School <span className="required">Required</span>
                </label>
                <input type="text" name="school" id="school" maxLength={30} required />
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
                  maxLength={35}
                  required
                />
              </div>
              <div className="field">
                <label for="honors">
                  Class Honors <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="honors"
                  id="honors"
                  placeholder="First Class"
                  maxLength={25}
                />
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
                <input
                  type="text"
                  name="country-education"
                  id="country-education"
                  maxLength={20}
                />
              </div>
              <div className="field">
                <label for="city-education">
                  City <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="city-education"
                  id="city-education"
                  maxLength={20}
                />
              </div>
              <div className="field-footer">
                <span className="clear-field">
                  <i class="fa-solid fa-eraser"></i> Clear
                </span>
                <span className="add-field">
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
            <div className="first added">
              <span>Company Name</span>
              <span>
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </div>
            <div className="second added">
              <span>Company Name 2</span>
              <span>
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </div>
            <section className="professional-fields first">
              <div className="field">
                <label for="company">
                  Company Name <span className="required">Required</span>
                </label>
                <input type="text" name="company" id="company" maxLength={30} required />
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
                  maxLength={30}
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
                  maxLength={20}
                />
              </div>
              <div className="field">
                <label for="city-professional">
                  City <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="city-professional"
                  id="city-professional"
                  maxLength={20}
                />
              </div>
              <div className="field-description">
                <label for="description">
                  Description <span className="optional">Optional</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="As a software engineer, ..."
                  maxLength={160}
                  cols="20"
                  rows="10"
                ></textarea>
              </div>
              <div className="field-footer">
                <span className="clear-field">
                  <i class="fa-solid fa-eraser"></i> Clear
                </span>
                <span className="add-field">
                  <i class="fa-solid fa-pencil"></i> Add
                </span>
              </div>
            </section>
            <section className="professional-fields second">
              <div className="field">
                <label for="company">
                  Company Name <span className="required">Required</span>
                </label>
                <input type="text" name="company" id="company" maxLength={30} required />
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
                  maxLength={30}
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
                  maxLength={20}
                />
              </div>
              <div className="field">
                <label for="city-professional">
                  City <span className="optional">Optional</span>
                </label>
                <input
                  type="text"
                  name="city-professional"
                  id="city-professional"
                  maxLength={20}
                />
              </div>
              <div className="field-description">
                <label for="description">
                  Description <span className="optional">Optional</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="As a software engineer, ..."
                  maxLength={160}
                  cols="20"
                  rows="10"
                ></textarea>
              </div>
              <div className="field-footer">
                <span className="clear-field">
                  <i class="fa-solid fa-eraser"></i> Clear
                </span>
                <span className="add-field">
                  <i class="fa-solid fa-pencil"></i> Add
                </span>
              </div>
            </section>
          </section>
        </section>
      </section>
      <section className="resume-cover">
        <section className="resume-header">
          <section className="resume-profile">
            <div></div>
          </section>
          <section className="name-position">
            <p className="resume-name">Ever Costa</p>
            <p className="resume-position">Software Engineer</p>
          </section>
          <section className="resume-contact">
            <h2>Contact</h2>
            <p>
              <i class="fa-solid fa-phone"></i>{" "}
              <span className="resume-personal-phone">+1 416 123 4567</span>
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>{" "}
              <span className="resume-personal-mail">ever@gmail.com</span>
            </p>
            <p>
              <i class="fa-solid fa-location-dot"></i>{" "}
              <span className="resume-personal-location">Canada, Ottawa</span>
            </p>
            <p>
              <i class="fa-solid fa-location-arrow"></i>{" "}
              <span className="resume-personal-address">123 Main Street</span>
            </p>
          </section>
          {/* <section className="resume-skills">
            <h2>Skills</h2>
            <ul>
              <li>Code</li>
              <li>Program</li>
              <li>Thinker</li>
            </ul>
          </section> */}
        </section>
        <section className="resume-body">
          <section className="resume-education">
            <h2>Education</h2>
            <section className="first">
              <p>
                <span className="resume-school">University of Montreal</span>{" "}
                <span className="resume-date">2020 - 2024</span>
              </p>
              <p>
                <span className="resume-degree">Bachelor of Science</span> |{" "}
                <span className="resume-honors">First Class Honors</span>
              </p>
              <p className="resume-location">Canada ⚫ Quebec</p>
            </section>
            <section className="second">
              <p>
                <span className="resume-school">Oxford University</span>{" "}
                <span className="resume-date">2024 - 2025</span>
              </p>
              <p>
                <span className="resume-degree">Master's Degree</span> |{" "}
                <span className="resume-honors">High distinction</span>
              </p>
              <p className="resume-location">UK ⚫ Oxford</p>
            </section>
          </section>
          <section className="resume-professional">
            <h2>Professional Experience</h2>
            <section className="first">
              <p>
                <span className="resume-company">Tesla Inc</span>
                <span className="resume-date">Aug, 2025 - Sep, 2026</span>
              </p>
              <p className="resume-position">Chief Software Engineer</p>
              <p className="resume-location">Canada ⚫ Ottawa</p>
              <p className="resume-description">
                As a software engineer, I turn challenges into solutions through lines of
                code. Dedicated to building impactful software.
              </p>
            </section>
            <section className="second">
              <p>
                <span className="resume-company">SpaceX Corp</span>
                <span className="resume-date">Aug, 2027 - Sep, 2028</span>
              </p>
              <p className="resume-position">Software Engineer</p>
              <p className="resume-location">US ⚫ Hawthorne</p>
              <p className="resume-description">
                As a chief software engineer, I turn challenges into solutions through
                lines of code. Dedicated to building impactful software.
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export { App };
