import React from 'react';

import './App.css';
// import UploadFile from "./UploadFile";
import DropZone from './dropzone/Dropzone'; 

function App() {
  return (
    <div>
      <div className="content">
        <DropZone />
      </div>
    </div>
  );
}

export default App;