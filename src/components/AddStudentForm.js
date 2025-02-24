import React, { useState } from "react";

const AddStudentForm = ({ onAddStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [currentGrade, setCurrentGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      alert("Please add a first name");
      return;
    } else if (!lastName) {
      alert("Please add a last name");
      return;
    } else if (!dateOfBirth) {
      alert("Please add a date of birth");
      return;
    } else if (!currentGrade) {
      alert("Please add a current grade");
      return;
    }

    const newStudent = {
      id: Math.floor(Math.random() * 10000),
      firstName,
      lastName,
      dateOfBirth,
      currentGrade: Number(currentGrade), // Convert to number
    };

    onAddStudent(newStudent);
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setCurrentGrade("");
  };

  return (
    <div className="container mx-auto text-black text-center min-h-screen overflow-auto">
      <form onSubmit={handleSubmit} className="bg-blue-200 p-20 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Add a New Student :)</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-2xl font-semibold">
              {" "}
              Your First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-10 rounded-lg text-black text-2xl"
              required
            />
          </div>
          <div>
            <label className="block text-2xl font-semibold">
              {" "}
              Your Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-10 rounded-lg text-black text-2xl"
              required
            />
          </div>
          <div>
            <label className="block text-2xl font-semibold">
              Your Date of Birth
            </label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="p-10 rounded-lg text-black text-2xl"
              required
            />
          </div>
          <div>
            <label className="block text-2xl font-semibold">
              Your Current Grade
            </label>
            <input
              type="number"
              placeholder="Enter your current grade"
              value={currentGrade}
              onChange={(e) => setCurrentGrade(e.target.value)}
              className="p-10 rounded-lg text-black text-2xl"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-700 text-white font-bold p-4 rounded-lg hover:bg-red-900"
          >
            Add Student To List!
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
