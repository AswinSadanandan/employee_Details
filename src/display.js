import React from "react";

const Display = ({ details }) => {
  return (
    <div>
      {details.map((employeedetails, index) => {
        const {
          name,
          contact,
          Designation,
          phone,
          skillInput,
          dob,
          emergencyContact,
          emergencyPhone,
        } = employeedetails;
        return (
          <article key={index} className="box2">
            <div className="qwe">
              #Employee{index + 1}
              <p>Name: {name}</p>
              <p>Designation :{Designation}</p>
              <p>
                {contact}:{phone}
                <br />
                {emergencyContact}:{emergencyPhone}
              </p>
              <p>
                Skills:
                {skillInput.map((item) => {
                  return <div className="align">{item}</div>;
                })}
              </p>
              <p>DOB :{dob}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Display;
