import React from 'react';
import './Table.css';
import TableHeader from './tableHeader/TableHeader';
import { getTableData } from '../../../../utils/seed';

const Table = () => {
  const getSkills = (skills) => {
    const skillsToDisplay = [];
    for (let i = 0; i < skills.length && i < 2; i++) {
      skillsToDisplay.push(<p className="skill-tag">{skills[i]}</p>);
    }
    if (skills.length > 2) {
      skillsToDisplay.push(
        <p className="skill-tag">{`+${skills.length - 2}`}</p>
      );
    }
    return skillsToDisplay;
  };

  return (
    <table id="table" className="students-table">
      <thead>
        <tr>
          <TableHeader title="NOMBRE" canOrder />
          <TableHeader title="CIUDAD" canOrder />
          <TableHeader title="PAÍS" canOrder />
          <TableHeader title="TELÉFONO" />
          <TableHeader title="CORREO ELECTRÓNICO" canOrder />
          <TableHeader title="ETIQUETAS" canOrder />
        </tr>

        {getTableData(15).map((e) => (
          <tr>
            <td>{e.fullname}</td>
            <td>{e.city}</td>
            <td>{e.country}</td>
            <td>{e.phone}</td>
            <td>{e.email}</td>
            <td>
              <div className="skill-container">{getSkills(e.skills)}</div>
            </td>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default Table;
