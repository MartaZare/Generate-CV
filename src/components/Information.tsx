import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Information() {
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
    <>
      <div className="d-flex flex-column align-items-center">
        <form className="w-50">
          <div className="row pb-2 ">
            <div className="form-group col ">
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                placeholder="First name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group col ">
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
          <div className="row pb-2">
            <div className="form-group col ">
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={phone}
                placeholder="Phone number"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col ">
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
          <div className="form-group">
            <textarea
              className="form-control"
              name="description"
              value={description}
              placeholder="Description"
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
