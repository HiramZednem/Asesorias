import React from 'react';
import SearchStudents from '../moleculas/SearchStudents';
import RegisterGroup from '../moleculas/RegisterGroup';
import RequestList from '../moleculas/RequestList';
import '../../assets/MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <div className="header">
        {/* Header content can go here */}
      </div>
      <div className="content">
        <SearchStudents />
        <RegisterGroup />
        <RequestList />
      </div>
    </div>
  );
}

export default MainContent;
