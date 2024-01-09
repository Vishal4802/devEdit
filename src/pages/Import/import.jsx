import React, { useState } from 'react';

const Import = ({onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        onFileUpload(selectedFile);
      }
    };
  
    return (
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} className='btn btn-primary'>Upload</button>
      </div>
    );
};

export default Import;
