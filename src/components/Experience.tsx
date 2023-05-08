import React, { useState } from "react";
import { MagicButton } from "./MagicButton";

interface ExperienceUnit {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

let nextId: number = 0;

export const Experience = () => {
  const [experiences, setExperience] = useState<Array<ExperienceUnit>>([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case "company":
        setCompany(event.target.value);
        break;

      case "position":
        setPosition(event.target.value);
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

  const deleteExperience = () => {
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const addExperience = () => {
    setExperience([
      ...experiences,
      { id: nextId++, company, position, startDate, endDate, description },
    ]);
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <>
      <ul>
        {experiences.map((experienceUnit: ExperienceUnit) => {
          return (
            <li key={experienceUnit.id}>
              Company name: {experienceUnit.company}
              Position: {experienceUnit.position}
              Start date: {experienceUnit.startDate}
              End date: {experienceUnit.endDate}
              Description: {experienceUnit.description}
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
              name="company"
              value={company}
              placeholder="Company"
              onChange={handleChange}
            />
          </div>

          <div className="form-group p-1">
            <input
              type="text"
              className="form-control"
              name="position"
              value={position}
              placeholder="Position"
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
          deleteButton={deleteExperience}
          addButton={addExperience}
        ></MagicButton>
      </div>
    </>
  );
};
