import { useState } from "react";
import "./styles/App.css";
// import "./styles/reset.css";

function App() {
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
                <label for="first-names">First Name(s)</label>
                <input type="text" name="first-names" id="first-names" />
              </div>
              <div className="field">
                <label for="last-name">Last Name</label>
                <input type="text" name="last-name" id="last-name" />
              </div>
              <div className="field">
                <label for="mail">Email</label>
                <input type="email" name="mail" id="mail" />
              </div>
              <div className="field">
                <label for="phone">Phone number</label>
                <input type="tel" name="last-name" id="last-name" />
              </div>
              <div className="field">
                <label for="country">Country</label>
                <input type="text" name="country" id="country" />
              </div>
              <div className="field">
                <label for="city">City</label>
                <input type="text" name="city" id="city" />
              </div>
              <div className="field">
                <label for="address">Address</label>
                <input type="text" name="last-name" id="last-name" />
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
                <label for="school">School</label>
                <input type="text" name="school" id="school" />
              </div>
              <div className="field">
                <label for="degree">Degree</label>
                <input type="text" name="degree" id="degree" />
              </div>
              <div className="field">
                <label for="honors">Class Honors</label>
                <input type="text" name="honors" id="honors" />
              </div>
              <div className="field">
                <label for="start-date">Start Date</label>
                <input type="date" name="start-date" id="start-date" />
              </div>
              <div className="field">
                <label for="end-date">End Date</label>
                <input type="date" name="end-date" id="end-date" />
              </div>
              <div className="field">
                <label for="country">Country</label>
                <input type="text" name="country" id="country" />
              </div>
              <div className="field">
                <label for="city">City</label>
                <input type="text" name="city" id="city" />
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
                <label for="company">Company Name</label>
                <input type="text" name="company" id="company" />
              </div>
              <div className="field">
                <label for="position">Position</label>
                <input type="text" name="position" id="position" />
              </div>
              <div className="field">
                <label for="start-date">Start Date</label>
                <input type="date" name="start-date" id="start-date" />
              </div>
              <div className="field">
                <label for="end-date">End Date</label>
                <input type="date" name="end-date" id="end-date" />
              </div>
              <div className="field">
                <label for="country">Country</label>
                <input type="text" name="country" id="country" />
              </div>
              <div className="field">
                <label for="city">City</label>
                <input type="text" name="city" id="city" />
              </div>
              <div className="field-description">
                <label for="description">Description</label>
                <textarea
                  name="description"
                  id="description"
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
