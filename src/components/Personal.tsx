import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function InputField() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;

      case "surname":
        setSurname(event.target.value);
        break;

      case "phone":
        setPhone(event.target.value);
        break;

      case "email":
        setEmail(event.target.value);
        break;
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescription(event.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="p-3 mb-5 bg-secondary text-white w-100 text-center">
        Your Wonderful CV
      </h1>
      <form className="w-50">
        <div className="row ">
          <div className="form-group col p-1">
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              placeholder="First name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group col p-1">
            <input
              type="text"
              className="form-control"
              name="surname"
              value={surname}
              placeholder="Last name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col p-1">
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={phone}
              placeholder="Phone number"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col p-1">
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              placeholder="Email"
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
        <Button
          type="button"
          className="btn btn-primary btn-lg btn-block w-100"
        >
          Submit
        </Button>
      </form>

      <div>{name}</div>
      <div>{surname}</div>
      <div>{phone}</div>
      <div>{email}</div>
      <div>{description}</div>
    </div>
  );
}
