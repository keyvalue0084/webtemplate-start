import React from 'react';
import './AppTemplate.css';

const AppTemplate = ({leftSideMenu, centerContents}) => {
  return (
    <div className="app-template">
      <div className="leftSideMenu">{leftSideMenu}</div>
      <div className="centerContents">{centerContents}</div>
    </div>
  );
};

export default AppTemplate;