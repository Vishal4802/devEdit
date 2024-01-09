import React, { useState } from 'react';
import './App.css'
import Import from './pages/Import/import'
import EditPage from './pages/editPage/editPage';

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [premium, setPremium] = useState(false);

  const handleFileUpload = (file) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const handleCancelEditing = () => {
    setImageUrl(null);
  };

  return (
    <div className='conatin d-flex justify-content-center align-items-center'>
      <div className='bg-primary mb-4 logo'>
        <div>devEdit</div>
        <div className='btn btn-warning' onClick={() => {setPremium(true)}}>Premium</div>
      </div>
      <div className='sub-container w-100 d-flex justify-content-center align-items-center'>
          { premium &&
            <div className='d-flex justify-content-center align-items-center gap-2' style={{flexDirection: "column"}}>
              <h1 className='text-secondary' style={{fontFamily: "cursive"}}>There's nothing <span className='text-primary'>premium</span> here</h1>
              <button className='btn btn-danger' onClick={() => {setPremium(false)}}>Go Back</button>
            </div>
          }

          {imageUrl && !premium && (
            <div>
              <EditPage imageUrl={imageUrl} handleCancel={handleCancelEditing} />
            </div>
          )}
          {!imageUrl && !premium && (
            <Import onFileUpload={handleFileUpload} />
          )}
      </div>
    </div>
  );
}

export default App;
