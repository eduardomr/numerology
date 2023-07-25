import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DateForm = () => {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("date:", date);
    };

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDate(newValue);
  };
  return (
    <Datepicker useRange={false} asSingle={true} value={date} onChange={handleValueChange} displayFormat={"DD/MM/YYYY"}/>
  );
};

export default DateForm;

