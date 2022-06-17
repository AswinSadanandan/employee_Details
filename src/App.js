import React, { useEffect, useState } from "react";
import Display from "./display";
function App() {
  const [name, Setname] = useState("");
  const [contact, setContact] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [Designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState([]);
  const [dob, setDob] = useState("");
  const [view, setView] = useState(false);
  const [details, setDetails] = useState([]);
  const [skillInput, setSkillinput] = useState([""]);
  const [buttonClicked, setButtonClicked] = useState(false);
  useEffect(() => {
    console.log("details", details);
  }, [details]);
  const handleDownloadJson = () => {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(details, null, 2));
    var dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "employee_Details.json");
    dlAnchorElem.click();
  };

  const handleSkillsdata = () => {
    setSkillinput([...skillInput, ""]);
  };

  const handleSubmit = (e) => {
    if (phone.length >= 10 && name.length > 0 && Designation.length > 0) {
      e.preventDefault();
      console.log(details);
      setDetails([
        ...details,
        {
          name,
          contact,
          Designation,
          phone,
          skillInput,
          dob,
          emergencyContact,
          emergencyPhone,
        },
      ]);

      setSkillinput([""]);
      setContact("");
      setDesignation("");
      setPhone("");
      setEmergencyPhone("");
      setEmergencyContact("");
      setSkills("");
      Setname("");
      setDob("");
      setView(false);
    } else {
      alert(
        "Fill the required fields and phone number should be atleast 10 characters"
      );
    }
  };
  const clickContact = () => {
    setButtonClicked(true);
  };

  return (
    <div className="create">
      <h2>Employee Data</h2>
      <div className="box">
        <div>
          <div className="name">
            <div className="general">
              <label>*Name:</label>
            </div>
            <div className="nameinput">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => Setname(e.target.value)}
              />
            </div>
          </div>
          <div className="name">
            <div className="general">
              <label>*Designation:</label>
            </div>
            <div className="nameinput">
              <input
                type="text"
                required
                value={Designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
          </div>
          <div className="name">
            <div className="general">
              <label>Contact Details:</label>
            </div>
            <div className="nameinput1">
              <input
                type="text"
                required
                placeholder="Primary"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="nameinput">
              <input
                type="number"
                placeholder="phonenumber"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="btn">
              <button className="asd" onClick={clickContact}>
                +
              </button>
            </div>
          </div>
          {buttonClicked ? (
            <div className="name">
              <div className="general"></div>
              <div className="nameinput1">
                <input
                  type="text"
                  placeholder="Emergency"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                />
              </div>
              <div className="nameinput">
                <input
                  type="number"
                  placeholder="phonenumber"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="name1">
            <div className="general">
              <label>Skills</label>
            </div>
            <div>
              {skillInput.map((item, i) => {
                return (
                  <div className="parent">
                    <div className="nameinput">
                      <input
                        key={i}
                        type="text"
                        value={skillInput[i]}
                        onChange={(e) => {
                          const currentinput = skillInput.slice();
                          currentinput[i] = e.target.value;
                          setSkillinput(currentinput);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="btn">
              <button className="asd" onClick={handleSkillsdata}>
                +
              </button>
            </div>
          </div>
          <div className="name">
            <div className="general">
              <label>DOB</label>
            </div>
            <div className="nameinput">
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <br />
          <button onClick={handleSubmit}>ADD EMPLOYEE</button>
        </div>
      </div>
      <div></div>
      <br />
      <div>
        <button onClick={() => setView(true)}>VIEW DATA</button>
      </div>
      <br />
      {view && <Display details={details} />}
      <br />
      <button onClick={handleDownloadJson}>Download JSON</button>
      <a id="downloadAnchorElem" href="#"></a>
    </div>
  );
}

export default App;
