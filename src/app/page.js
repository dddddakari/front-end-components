'use client'
import React, { useState } from "react";
import NavBar from "../components/navBar";
import StudentList from "@/components/StudentList";
import AddStudentForm from "@/components/AddStudentForm";
import studentsData from '../data/students.json';

export default function Home() {
  // State to manage students
  const [students, setStudents] = useState(studentsData);

  // Function to add a student
  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen overflow-auto">
      <main className="min-h-screen overflow-auto">
        <NavBar />
        <div className="container mx-auto text-black text-center">
          <h1 className="text-6xl font-extrabold pt-20">Student List</h1>
          <p className="text-3xl pt-5">List of students we have enrolled right now!</p>
        </div>   

        <StudentList students={students} />
        <AddStudentForm onAddStudent={handleAddStudent} />
      
      </main>
    </div>
  );
}
