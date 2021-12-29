import React from 'react';
import StudentBar from './studentBar/StudentBar';
import Table from './table/Table';
import './TableContainer.css';

const TableContainer = () => {
  return (
    <div className="table-container">
      <StudentBar />
      <Table />
    </div>
  );
};
export default TableContainer;
