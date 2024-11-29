import React from 'react';
import '../App.css';  

const TablaEstudiantes = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaEstudiantes;