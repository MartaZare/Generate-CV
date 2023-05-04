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

      case "description":
        setDescription(event.target.value);
        break;
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="First name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="surname"
          value={surname}
          placeholder="Last name"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          value={phone}
          placeholder="Phone number"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={handleChange}
        />

        <Button>Submit</Button>
      </form>

      <div>{name}</div>
      <div>{surname}</div>
      <div>{phone}</div>
      <div>{email}</div>
      <div>{description}</div>
    </>
  );
}
