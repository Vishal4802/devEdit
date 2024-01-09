import React from 'react';

const Filters = ({ sepia, setSepia, sea, setSea}) => {
  const toggleSepia = () => {
    setSepia(sepia === 0 ? 100 : 0);
  };

  return (
    <div className="d-flex font-weight-bold text-primary" style={{ flexDirection: "column", gap: "8vh", width: "250px" }}>
      <div className="mb-4">
        <label className="form-label">
          <button
            className={`btn ${sepia ? 'btn-success' : 'btn-outline-success'}`}
            onClick={toggleSepia}
          >
            Sepia
          </button>
        </label>
      </div>
    </div>
  );
};

export default Filters;
