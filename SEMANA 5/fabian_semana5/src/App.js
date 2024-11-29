import React, { useState } from 'react';
import './App.css';
import TablaEstudiantes from './components/formtabla';
import FormEstudiantes from './components/formestudiantes';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="app-container">
      <h1>Registro de Estudiantes</h1>
      <FormEstudiantes addStudent={addStudent} />
      <TablaEstudiantes students={students} />
    </div>
  );
};

export default App;

