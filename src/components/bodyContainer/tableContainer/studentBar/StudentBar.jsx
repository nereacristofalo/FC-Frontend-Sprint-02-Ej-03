import React from 'react';
import Button from './button/Button';
import SearchContainer from './searchContainer/SearchContainer';
import './StudentBar.css';

const StudentBar = () => {
  return (
    <div className="student-bar">
      <SearchContainer />
      <Button />
    </div>
  );
};

export default StudentBar;
