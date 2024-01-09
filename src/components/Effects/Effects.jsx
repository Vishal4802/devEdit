import React from 'react';

const Effects = ({ blur, setBlur, opacity, setOpacity, invert, setInvert }) => {

  return (
        <div className="d-flex font-weight-bold text-primary" style={{ flexDirection: "column", gap: "8vh", width: "250px" }}>
          <div className="mb-4">
            <label className="form-label">
              Blur:
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Opacity:
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Invert:
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={invert}
                onChange={(e) => setInvert(Number(e.target.value))}
              />
            </label>
          </div>
        </div>
  );
};

export default Effects;
