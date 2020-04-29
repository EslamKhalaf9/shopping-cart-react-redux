import React from "react";

const OrderForm = ({ personalInfo, changePersonalInfo }) => {
  const handleChange = (e) => {
    changePersonalInfo({ name: e.target.name, value: e.target.value });
  };
  return (
    <form className="flex flex-col justify-center md:w-1/2 mx-auto">
      <input
        type="text"
        className="border border-gray-500 p-2 m-2"
        placeholder="Name: ex. John Doe"
        value={personalInfo.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        className="border border-gray-500 p-2 m-2"
        placeholder="Email: ex. mail@mail.com"
        value={personalInfo.email}
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        className="border border-gray-500 p-2 m-2"
        placeholder="Phone: ex. 011122223333"
        value={personalInfo.phone}
        name="phone"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="city"
        className="border border-gray-500 p-2 m-2"
        placeholder="City: ex. Cairo"
        value={personalInfo.city}
        name="city"
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white rounded p-2 mt-5 mx-auto"
      >
        Request Order
      </button>
    </form>
  );
};

export default OrderForm;
