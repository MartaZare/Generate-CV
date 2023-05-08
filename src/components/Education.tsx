import React, { useState } from "react";
import { MagicButton } from "./MagicButton";

interface EducationUnit {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

let nextId: number = 0;

export const Education = () => {
  const [educations, setEducation] = useState<Array<EducationUnit>>([]);
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case "institution":
        setInstitution(event.target.value);
        break;

      case "degree":
        setDegree(event.target.value);
        break;

      case "startDate":
        setStartDate(event.target.value);
        break;

      case "endDate":
        setEndDate(event.target.value);
        break;
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescription(event.target.value);
  };

  const deleteEducation = () => {
    setInstitution("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const addEducation = () => {
    setEducation([
      ...educations,
      { id: nextId++, institution, degree, startDate, endDate, description },
    ]);
    setInstitution("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <>
      <ul>
        {educations.map((educationUnit: EducationUnit) => {
          return (
            <li key={educationUnit.id}>
              Institution name: {educationUnit.institution}
              Degree: {educationUnit.degree}
              Start date: {educationUnit.startDate}
              End date: {educationUnit.endDate}
              Description: {educationUnit.description}
            </li>
          );
        })}
      </ul>

      <div className="d-flex flex-column align-items-center">
        <form className="w-50">
          <div className="form-group p-1">
            <input
              type="text"
              className="form-control"
              name="institution"
              value={institution}
              placeholder="Institution"
              onChange={handleChange}
            />
          </div>

          <div className="form-group p-1">
            <input
              type="text"
              className="form-control"
              name="degree"
              value={degree}
              placeholder="Degree"
              onChange={handleChange}
            />
          </div>
          <div className="row m-0">
            <div className="form-group p-1 col">
              <input
                type="text"
                className="form-control"
                name="startDate"
                value={startDate}
                placeholder="Start date"
                onChange={handleChange}
              />
            </div>

            <div className="form-group p-1 col">
              <input
                type="text"
                className="form-control"
                name="endDate"
                value={endDate}
                placeholder="End Date"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group p-1">
            <textarea
              className="form-control"
              name="description"
              value={description}
              placeholder="Description"
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </form>

        <MagicButton
          deleteButton={deleteEducation}
          addButton={addEducation}
        ></MagicButton>
      </div>
    </>
  );
};
