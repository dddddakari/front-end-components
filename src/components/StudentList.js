import React from 'react'

const StudentList = ({ students }) => {
  return (
    <div  className="container mx-auto text-black text-3xl text-center pt-10 min-h-screen overflow-auto m-4">
      {students.map((student) => (
        <div key={student.id} className="bg-blue-200 p-10 mb-10 rounded-lg hover:bg-blue-400">
          <h2 className=" font-bold">{student.firstName} {student.lastName}</h2>
          <p>Date of Birth: {student.dateOfBirth}</p>
          <p>Grade: {student.currentGrade} %</p>
        </div>
      ))}
      <h3 className="pt-24">Not Seeing your name? Add Yourself to the list!</h3>
    </div>
  );
};

export default StudentList;